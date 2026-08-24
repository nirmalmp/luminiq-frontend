'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './CinematicIntro.module.css';

const FRAME_MS = 2600;

/**
 * Full-screen title sequence that plays when the property page opens: each
 * frame slowly pushes in or drifts across while the next one crossfades over
 * it, so the set reads as a shot reel rather than a slideshow.
 *
 * It renders in the prerendered HTML (initial state is "playing"), so there is
 * no flash of the page behind it before hydration. Two consequences of that
 * are handled below: a <noscript> rule hides it when nothing can dismiss it,
 * and a CSS reduced-motion rule hides it before the effect can run.
 *
 * Frames load progressively -- only up to index + 1 is mounted -- so the page
 * fetches one 2000px file every 2.6s instead of ten at once.
 */
export default function CinematicIntro({ photos, title, eyebrow = 'Luminiq Media', onDone }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const timer = useRef(null);

  const dismiss = useCallback(() => {
    setLeaving(true);
    // Let the fade-out finish before unmounting.
    window.setTimeout(() => {
      setPlaying(false);
      onDone?.();
    }, 620);
  }, [onDone]);

  // Honour reduced motion: never animate, never take the screen over.
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setPlaying(false);
      onDone?.();
    }
  }, [onDone]);

  // Advance, then bow out on the last frame.
  useEffect(() => {
    if (!playing || leaving) return undefined;

    timer.current = window.setTimeout(() => {
      if (index >= photos.length - 1) dismiss();
      else setIndex((i) => i + 1);
    }, FRAME_MS);

    return () => window.clearTimeout(timer.current);
  }, [index, playing, leaving, photos.length, dismiss]);

  // Escape, or any intent to scroll, drops you into the page.
  useEffect(() => {
    if (!playing) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        dismiss();
      }
    };
    const onScrollIntent = () => dismiss();

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('wheel', onScrollIntent, { passive: true });
    window.addEventListener('touchmove', onScrollIntent, { passive: true });

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', onScrollIntent);
      window.removeEventListener('touchmove', onScrollIntent);
    };
  }, [playing, dismiss]);

  // Hold the page still underneath while the sequence owns the screen.
  useEffect(() => {
    if (!playing) return undefined;

    const { body, documentElement } = document;
    const gap = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;

    body.style.overflow = 'hidden';
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
    };
  }, [playing]);

  if (!playing) return null;

  return (
    <div
      className={`${styles.overlay} ${leaving ? styles.leaving : ''}`}
      role="region"
      aria-label={`${title} — opening sequence`}
    >
      {photos.map((photo, i) => {
        if (i > index + 1) return null; // not loaded yet
        const state = i === index ? styles.active : styles.hidden;
        // Alternate the move so consecutive frames never drift the same way.
        const motion = [styles.pushIn, styles.driftLeft, styles.pullBack, styles.driftRight][i % 4];

        return (
          <div key={photo.name} className={`${styles.frame} ${state}`} aria-hidden={i !== index}>
            <Image
              src={photo.full}
              alt={i === index ? photo.alt : ''}
              fill
              sizes="100vw"
              priority={i === 0}
              placeholder="blur"
              className={`${styles.image} ${i === index ? motion : ''}`}
            />
          </div>
        );
      })}

      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.barTop} aria-hidden="true" />
      <div className={styles.barBottom} aria-hidden="true" />

      <div className={styles.titleCard}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.title}>{title}</span>
      </div>

      <p className={styles.caption} key={photos[index].name}>
        {photos[index].caption}
      </p>

      <div className={styles.progress} aria-hidden="true">
        {photos.map((photo, i) => (
          <span
            key={photo.name}
            className={`${styles.pip} ${i < index ? styles.pipDone : ''} ${
              i === index ? styles.pipActive : ''
            }`}
          />
        ))}
      </div>

      <button type="button" className={styles.skip} onClick={dismiss}>
        Skip
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      <span className={styles.hint} aria-hidden="true">
        Scroll to explore
      </span>

      {/* Nothing can dismiss a fixed overlay without JS, so don't show one. */}
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: `.${styles.overlay}{display:none}` }} />
      </noscript>
    </div>
  );
}

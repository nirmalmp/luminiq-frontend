'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

const GRID_SIZES = '(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw';

/**
 * Photo grid with a dependency-free lightbox.
 *
 * Tiles render the 900px `grid` file; the 2000px `full` file is only ever
 * fetched for the open photo and its two neighbours, so opening the lightbox
 * costs one image rather than thirty-four.
 *
 * This component is prerendered at build time under output: 'export', so every
 * document/window touch lives inside an effect.
 */
export default function Gallery({ photos }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const tileRefs = useRef([]);
  const dialogRef = useRef(null);
  const openerIndex = useRef(null);
  const touchStartX = useRef(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const step = useCallback(
    (delta) => {
      setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));
    },
    [photos.length],
  );

  const open = (index) => {
    openerIndex.current = index;
    setOpenIndex(index);
  };

  // Keyboard: arrows page, Escape closes, Tab stays inside the dialog.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        step(1);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        step(-1);
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll('button');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close, step]);

  // Freeze the page behind the overlay, compensating for the lost scrollbar so
  // the layout underneath does not jump on open.
  useEffect(() => {
    if (!isOpen) return undefined;

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
  }, [isOpen]);

  // Move focus into the dialog on open, and hand it back to the tile that
  // opened it on close.
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
      return;
    }
    const tile = tileRefs.current[openerIndex.current];
    if (tile) tile.focus();
    openerIndex.current = null;
  }, [isOpen]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  };

  const photo = isOpen ? photos[openIndex] : null;

  // Current photo plus both neighbours, deduped so a short gallery cannot
  // render the same key twice.
  const loaded = isOpen
    ? [...new Set([
        (openIndex - 1 + photos.length) % photos.length,
        openIndex,
        (openIndex + 1) % photos.length,
      ])]
    : [];

  return (
    <>
      <ul className={styles.grid}>
        {photos.map((p, i) => (
          <li key={p.name}>
            <button
              type="button"
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              className={styles.tile}
              onClick={() => open(i)}
              aria-label={`View photo ${i + 1} of ${photos.length}: ${p.caption}`}
            >
              <Image
                src={p.grid}
                alt={p.alt}
                fill
                sizes={GRID_SIZES}
                placeholder="blur"
                className={styles.tileImage}
              />
              <span className={styles.tag}>{p.tag}</span>
              <span className={styles.expand} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
              <span className={styles.caption}>{p.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${photo.caption} — photo ${openIndex + 1} of ${photos.length}`}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={close} aria-label="Close gallery">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <button
              type="button"
              className={`${styles.arrow} ${styles.prev}`}
              onClick={() => step(-1)}
              aria-label="Previous photo"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.stage}>
              {loaded.map((i) => (
                <Image
                  key={photos[i].name}
                  src={photos[i].full}
                  alt={i === openIndex ? photos[i].alt : ''}
                  aria-hidden={i !== openIndex}
                  priority={i === openIndex}
                  placeholder="blur"
                  className={i === openIndex ? styles.stageImage : styles.preload}
                />
              ))}
            </div>

            <button
              type="button"
              className={`${styles.arrow} ${styles.next}`}
              onClick={() => step(1)}
              aria-label="Next photo"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <p className={styles.meta} aria-live="polite">
              <span className={styles.metaCaption}>{photo.caption}</span>
              <span className={styles.counter}>
                {openIndex + 1} / {photos.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

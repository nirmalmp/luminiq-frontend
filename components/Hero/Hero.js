import Image from 'next/image';
import styles from './Hero.module.css';

/**
 * Landing hero: one photograph from the shoot behind the nav and the copy,
 * held under a slow drift so it reads as a film still rather than wallpaper.
 *
 * No JS -- the motion is a CSS animation, so this stays a server component and
 * the home page ships no extra client bundle for it.
 */
export default function Hero({ photo }) {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.frame} aria-hidden="true">
        <Image
          src={photo.full}
          alt=""
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          className={styles.frameImage}
        />
      </div>

      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrow}`}>Photography · Videography</span>
        <h1 className={styles.title}>
          Cinematic real estate media that <span className={styles.accent}>sells the space</span>
        </h1>
        <p className={styles.lead}>
          From first frame to final cut, Luminiq Media turns listings into stories buyers stop for. Cinematic property
          tours and magazine-grade photography, delivered fast enough to keep you first to market across the Greater
          Toronto Area and beyond.
        </p>

        <div className={styles.actions}>
          <a href="#work" className="btn btnPrimary">
            View Our Work
          </a>
          <a href="#contact" className="btn btnGhost">
            Get a Quote
          </a>
        </div>

        <div className={styles.trust}>
          <span className={styles.dot} aria-hidden="true" />
          Serving the Greater Toronto Area · 24-Hour Turnaround
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}

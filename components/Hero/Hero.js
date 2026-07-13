import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.aperture} aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <g transform="translate(100 100)">
            <circle r="92" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <path key={deg} d="M0 -78 L48 -16 L-10 -16 Z" transform={`rotate(${deg})`} fill="currentColor" />
            ))}
          </g>
        </svg>
      </div>

      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Photography · Videography</span>
        <h1 className={styles.title}>
          Cinematic real estate media that <span className={styles.accent}>sells the space</span>
        </h1>
        <p className={styles.lead}>
          From first frame to final cut, Luminiq Media turns listings into stories buyers stop for — cinematic property
          tours and magazine-grade photography, delivered fast enough to keep you first to market across the Greater
          Toronto Area.
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

      <div className={styles.scroll} aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}

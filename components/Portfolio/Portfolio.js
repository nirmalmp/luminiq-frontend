import styles from './Portfolio.module.css';

const TILES = [
  { label: 'Luxury Condo — Downtown Toronto', tag: 'Video Tour', span: 'wide' },
  { label: 'Detached Home — Oakville', tag: 'Photography' },
  { label: 'Penthouse — Yorkville', tag: 'Twilight' },
  { label: 'Estate — King City', tag: 'Aerial' },
  { label: 'Modern Townhome — Mississauga', tag: 'Social Reel' },
  { label: 'Waterfront — Burlington', tag: '3D Tour', span: 'wide' },
];

export default function Portfolio() {
  return (
    <section className="section" id="work">
      <div className="container">
        <span className="eyebrow">Selected Work</span>
        <h2 className="sectionTitle">A look at recent listings</h2>
        <p className="sectionLead">
          A snapshot of the homes we&apos;ve brought to life. Replace these placeholders with your own footage and photos
          anytime.
        </p>

        {/* Featured video — drop a YouTube/Vimeo iframe into the slot below */}
        <div className={styles.feature}>
          <div className={styles.videoSlot}>
            {/*
              Example embed (uncomment + set the ID):
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Luminiq Media — Featured Property Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            */}
            <button className={styles.play} aria-label="Play featured reel">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className={styles.featureLabel}>Featured Property Reel — 60s</span>
          </div>
        </div>

        <div className={styles.grid}>
          {TILES.map((t) => (
            <figure key={t.label} className={`${styles.tile} ${t.span === 'wide' ? styles.wide : ''}`}>
              <span className={styles.tag}>{t.tag}</span>
              <span className={styles.tilePlay} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <figcaption className={styles.caption}>{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

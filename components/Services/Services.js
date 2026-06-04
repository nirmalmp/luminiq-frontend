import styles from './Services.module.css';

const SERVICES = [
  {
    title: 'Cinematic Property Tours',
    desc: 'Smooth, story-driven walkthrough videos that make buyers feel the flow of every room.',
    icon: (
      <>
        <path d="M3 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M16 10l5-3v10l-5-3" />
      </>
    ),
  },
  {
    title: 'Real Estate Photography',
    desc: 'Bright, true-to-life HDR stills, professionally edited and MLS-ready overnight.',
    icon: (
      <>
        <path d="M3 8a2 2 0 0 1 2-2h2l1.2-2h7.6L19 6h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <circle cx="13" cy="12.5" r="3.5" />
      </>
    ),
  },
  {
    title: 'Aerial & Drone',
    desc: 'Licensed drone pilots capturing sweeping exteriors, lot lines, and neighbourhood context.',
    icon: (
      <>
        <path d="M5 6h4l3 4 3-4h4M5 18h4l3-4 3 4h4" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
      </>
    ),
  },
  {
    title: '3D & Virtual Tours',
    desc: 'Immersive dollhouse and walkthrough tours so buyers can explore anytime, anywhere.',
    icon: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
      </>
    ),
  },
  {
    title: 'Social Reels',
    desc: 'Vertical, fast-cut edits built for Instagram and TikTok to maximise listing reach.',
    icon: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2.5" />
        <path d="M10 9l5 3-5 3z" />
      </>
    ),
  },
  {
    title: 'Twilight & Lifestyle',
    desc: 'Golden-hour and twilight shoots that give premium listings an editorial, aspirational feel.',
    icon: (
      <>
        <path d="M4 18h16" />
        <path d="M7 18a5 5 0 0 1 10 0" />
        <path d="M12 4v3M5 7l2 2M19 7l-2 2M2 14h2M20 14h2" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <span className="eyebrow">What We Do</span>
        <h2 className="sectionTitle">Everything your listing needs to shine</h2>
        <p className="sectionLead">
          One team for the full media package — book a single shoot and receive a polished, market-ready set of video and
          photography.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <article key={s.title} className={styles.card}>
              <span className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './WhyUs.module.css';

const POINTS = [
  {
    title: '24-Hour Turnaround',
    desc: 'Shoot today, list tomorrow. Edited photos and videos back in your inbox within 24 hours.',
  },
  {
    title: 'MLS-ready files',
    desc: 'Correctly sized, colour-corrected, and formatted for every major listing platform.',
  },
  {
    title: 'Licensed drone pilot',
    desc: 'Transport Canada–certified aerial work, fully insured for residential and commercial shoots.',
  },
  {
    title: 'One team, one invoice',
    desc: 'Photo, video, drone, and 3D from a single crew — no juggling multiple vendors.',
  },
];

const STATS = [
  { value: '200+', label: 'Listings shot' },
  { value: '48h', label: 'Avg. turnaround' },
  { value: 'GTA', label: 'Coverage area' },
  { value: '4K', label: 'Video & drone' },
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.wrap}`} id="why">
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">Why Luminiq</span>
            <h2 className="sectionTitle">Built for agents who move fast</h2>
          </div>
          <p className={styles.lead}>
            We handle the media so you can focus on selling. Reliable scheduling, consistent quality, and a turnaround
            that keeps your listings first to market.
          </p>
        </div>

        <div className={styles.points}>
          {POINTS.map((p, i) => (
            <div key={p.title} className={styles.point}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.pointTitle}>{p.title}</h3>
              <p className={styles.pointDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

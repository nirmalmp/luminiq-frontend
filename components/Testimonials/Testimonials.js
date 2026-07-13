import styles from './Testimonials.module.css';

const QUOTES = [
  {
    quote:
      'The video tour Luminiq shot had my downtown condo under offer in four days. The footage made the unit look better than walking through it in person.',
    name: 'Priya S.',
    role: 'Sales Representative, Toronto',
  },
  {
    quote:
      'Fast, reliable, and the photos are consistently gorgeous. They’re now my go-to for every listing above a million.',
    name: 'Marc D.',
    role: 'Broker, Oakville',
  },
  {
    quote:
      'The drone footage gave my rural listing context no photo could. Professional from booking to delivery.',
    name: 'Janelle T.',
    role: 'Realtor, King City',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Reviews</span>
        <h2 className="sectionTitle">Trusted by GTA agents</h2>

        <div className={styles.grid}>
          {QUOTES.map((q) => (
            <figure key={q.name} className={styles.card}>
              <span className={styles.mark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles.quote}>{q.quote}</blockquote>
              <figcaption className={styles.by}>
                <span className={styles.name}>{q.name}</span>
                <span className={styles.role}>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

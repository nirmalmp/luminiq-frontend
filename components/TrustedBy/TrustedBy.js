import styles from './TrustedBy.module.css';

const BROKERAGES = [
  'Royal LePage',
  'Engel & Völkers',
  'Chestnut Park',
  'Forest Hill',
  'Harvey Kalles',
  'Bosley',
  'Property.ca',
];

export default function TrustedBy() {
  return (
    <section className={styles.wrap} aria-label="Trusted by agents at leading brokerages">
      <div className="container">
        <p className={styles.label}>Trusted by agents at</p>
        <ul className={styles.logos}>
          {BROKERAGES.map((name) => (
            <li key={name} className={styles.logo}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

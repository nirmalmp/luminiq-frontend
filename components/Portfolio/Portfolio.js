import Link from 'next/link';
import Image from 'next/image';
import styles from './Portfolio.module.css';
import { getProperty, pickPhotos } from '@/lib/properties';

const FEATURED_SLUG = 'timber-frame-estate';

/**
 * Six frames below the featured hero: two clean rows of three at the source
 * 3:2, so nothing is cropped and no cell is left empty.
 */
const TILE_NAMES = [
  'aerialRear',
  'greatRoomGable',
  'poolSunset',
  'kitchenView',
  'loftLookdown',
  'primaryEnsuite',
];

export default function Portfolio() {
  const property = getProperty(FEATURED_SLUG);
  const href = `/portfolio/${property.slug}`;
  const tiles = pickPhotos(property, TILE_NAMES);
  const hero = property.photos[0];

  return (
    <section className="section" id="work">
      <div className="container">
        <span className="eyebrow">Portfolio</span>
        <h2 className="sectionTitle">A recent shoot, start to finish</h2>
        <p className="sectionLead">
          One property, covered from the driveway to the last light of the day.
        </p>

        <Link href={href} className={styles.feature}>
          <Image
            src={hero.grid}
            alt={hero.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            placeholder="blur"
            className={styles.featureImage}
          />
          <span className={styles.featureBody}>
            <span className={styles.featureTitle}>{property.title}</span>
            <span className={styles.featureMeta}>
              {property.tags.join(' · ')} · {property.photos.length} photos
            </span>
          </span>
        </Link>

        <div className={styles.grid}>
          {tiles.map((t) => (
            <Link key={t.name} href={href} className={styles.tile}>
              <Image
                src={t.grid}
                alt={t.alt}
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 33vw"
                placeholder="blur"
                className={styles.tileImage}
              />
              <span className={styles.tag}>{t.tag}</span>
              <span className={styles.caption}>{t.caption}</span>
            </Link>
          ))}
        </div>

        <Link href={href} className={styles.moreLink}>
          View the full gallery
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

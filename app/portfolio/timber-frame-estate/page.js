import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Gallery from '@/components/Gallery/Gallery';
import CinematicIntro from '@/components/Gallery/CinematicIntro';
import styles from '@/components/Gallery/Gallery.module.css';
import { getProperty, pickPhotos } from '@/lib/properties';

/**
 * One route folder per shot property. lib/properties.js stays the single source
 * of truth, so a second shoot is a new entry there plus a copy of this file
 * with a different slug.
 *
 * Deliberately NOT app/portfolio/[slug]/page.js: `next dev` in 14.2 throws
 * "missing exported function generateStaticParams()" on dynamic segments while
 * output: 'export' is set, even when the function is exported. `next build`
 * prerenders it correctly, so the bug is dev-only -- but the page 500s the
 * whole time you are working on it. Worth revisiting as a [slug] route once
 * there are enough properties to justify it, or once that bug is fixed.
 */
const SLUG = 'timber-frame-estate';

export function generateMetadata() {
  const property = getProperty(SLUG);

  return {
    title: `${property.title} | Luminiq Media`,
    description: property.summary,
    openGraph: {
      title: `${property.title} | Luminiq Media`,
      description: property.summary,
    },
  };
}

export default function TimberFrameEstatePage() {
  const property = getProperty(SLUG);
  const hero = property.photos[0];

  return (
    <>
      <CinematicIntro photos={pickPhotos(property, property.intro)} title={property.title} />
      <Header />
      <main>
        <div className={`container ${styles.intro}`}>
          <span className="eyebrow">Portfolio</span>
          <h1 className={styles.title}>{property.title}</h1>
          <p className={styles.summary}>{property.summary}</p>
          <div className={styles.tags}>
            {property.tags.map((tag) => (
              <span key={tag} className={styles.tagPill}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={styles.hero}>
            <Image
              src={hero.full}
              alt={hero.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              placeholder="blur"
              priority
              className={styles.heroImage}
            />
          </div>
        </div>

        <section className={`container ${styles.gallery}`}>
          <Gallery photos={property.photos} />
        </section>

        <section className={styles.cta}>
          <div className="container">
            <h2 className="sectionTitle">Want this for your listing?</h2>
            <p className="sectionLead">
              Tell us the address and the date, and we&apos;ll take it from there.
            </p>
            <Link href="/#contact" className={`btn btnPrimary ${styles.ctaButton}`}>
              Get a Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

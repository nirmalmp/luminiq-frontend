import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './Footer.module.css';

const LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Portfolio', href: '/portfolio/timber-frame-estate' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Why Us', href: '/#why' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>Real estate photography &amp; videography.</p>
        </div>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href="tel:+16477749219">+1 647-774-9219</a>
          <a href="mailto:info@luminiqmedia.com">info@luminiqmedia.com</a>
          <a href="https://instagram.com/luminiqmedia" target="_blank" rel="noopener noreferrer">
            @luminiqmedia
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© Luminiq Media. All rights reserved.</span>
        <span>Toronto</span>
      </div>
    </footer>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.link} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={`btn btnPrimary ${styles.cta}`} onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? styles.barTop : ''} />
          <span className={open ? styles.barMid : ''} />
          <span className={open ? styles.barBot : ''} />
        </button>
      </div>
    </header>
  );
}

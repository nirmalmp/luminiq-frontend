import QuoteForm from './QuoteForm';
import styles from './Contact.module.css';

const CONTACTS = [
  {
    label: 'Call or text',
    value: '+1 647-774-9219',
    href: 'tel:+16477749219',
    icon: <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />,
  },
  {
    label: 'Email',
    value: 'info@luminiqmedia.com',
    href: 'mailto:info@luminiqmedia.com',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    label: 'Instagram',
    value: '@luminiqmedia',
    href: 'https://instagram.com/luminiqmedia',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section className={`section ${styles.wrap}`} id="contact">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <span className="eyebrow">Get In Touch</span>
          <h2 className="sectionTitle">Let&apos;s make your listing unforgettable</h2>
          <p className={styles.lead}>
            Tell us about the property and what you need. We&apos;ll reply within 24 hours with availability and a quote.
          </p>

          <ul className={styles.list}>
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a
                  className={styles.row}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className={styles.rowIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </span>
                  <span>
                    <span className={styles.rowLabel}>{c.label}</span>
                    <span className={styles.rowValue}>{c.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.area}>Serving Toronto &amp; the Greater Toronto Area</p>
        </div>

        <div className={styles.formWrap}>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}

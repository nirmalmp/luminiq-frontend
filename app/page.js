import { Camera, Video, Sparkles, Globe, Mail, Phone, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#top" className={styles.logo}>LUMINIQ MEDIA</a>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#work" className={styles.navLink}>Work</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
        <a href="#contact" className={styles.headerCta}>Book a Session</a>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>Toronto, Canada</span>
          <h1 className={styles.heroTitle}>LUMINIQ</h1>
          <h2 className={styles.heroTitleSub}>Media</h2>
          <div className={styles.heroDivider}>
            <span className={styles.heroTagline}>Photography &nbsp;|&nbsp; Videography</span>
          </div>
          <p className={styles.heroDescription}>
            Cinematic stories told through the lens. We craft timeless imagery and films
            for weddings, brands, and the moments worth remembering forever.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.btnPrimary}>
              Get a Quote <ArrowRight size={16} />
            </a>
            <a href="#work" className={styles.btnGhost}>View Our Work</a>
          </div>
        </div>
      </section>

      <section id="about" className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <span className={styles.sectionEyebrow}>About Us</span>
              <h2 className={styles.sectionTitle}>
                Capturing light, <em>crafting story.</em>
              </h2>
              <p>
                Luminiq Media is a Toronto-based photography and videography studio
                obsessed with the art of the frame. From intimate portraits to
                full-scale brand productions, we turn fleeting moments into
                heirlooms you can hold.
              </p>
              <p>
                Every project is approached with cinematic intent — careful lighting,
                considered composition, and the patience to wait for the shot
                that only happens once.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.stat}>
                  <div className={styles.statValue}>200+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statValue}>50+</div>
                  <div className={styles.statLabel}>Happy Clients</div>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <Camera size={120} className={styles.aboutImageIcon} strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>What We Do</span>
            <h2 className={styles.sectionTitle}>
              Services tailored to <em>your story.</em>
            </h2>
            <p className={styles.sectionLead}>
              From single-day shoots to multi-camera productions, we cover the
              full spectrum of visual storytelling.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Camera size={26} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Photography</h3>
              <p className={styles.serviceDescription}>
                Editorial-quality stills with an unhurried, intentional eye.
              </p>
              <ul className={styles.serviceList}>
                <li>Weddings &amp; Events</li>
                <li>Portraits &amp; Headshots</li>
                <li>Brand &amp; Product</li>
                <li>Real Estate</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Video size={26} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Videography</h3>
              <p className={styles.serviceDescription}>
                Cinematic films with story-led editing and theatrical sound design.
              </p>
              <ul className={styles.serviceList}>
                <li>Wedding Films</li>
                <li>Commercial &amp; Brand</li>
                <li>Music Videos</li>
                <li>Event Coverage</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Sparkles size={26} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Post-Production</h3>
              <p className={styles.serviceDescription}>
                Where the magic compounds — colour, sound, and final polish.
              </p>
              <ul className={styles.serviceList}>
                <li>Colour Grading</li>
                <li>Photo Retouching</li>
                <li>Sound Design</li>
                <li>Album Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Selected Work</span>
            <h2 className={styles.sectionTitle}>
              A glimpse of <em>recent stories.</em>
            </h2>
          </div>
          <div className={styles.portfolioGrid}>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioCaption}>
                <div className={styles.portfolioCategory}>Wedding Film</div>
                <div className={styles.portfolioTitle}>Aria &amp; Ronan</div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioCaption}>
                <div className={styles.portfolioCategory}>Brand</div>
                <div className={styles.portfolioTitle}>Nordic Atelier</div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioCaption}>
                <div className={styles.portfolioCategory}>Portrait</div>
                <div className={styles.portfolioTitle}>Studio Session</div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioCaption}>
                <div className={styles.portfolioCategory}>Commercial</div>
                <div className={styles.portfolioTitle}>Maison &amp; Co.</div>
              </div>
            </div>
            <div className={styles.portfolioItem}>
              <div className={styles.portfolioCaption}>
                <div className={styles.portfolioCategory}>Event</div>
                <div className={styles.portfolioTitle}>Gala Night</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactCard}>
          <span className={styles.sectionEyebrow}>Get in Touch</span>
          <h2 className={styles.contactTitle}>
            Let&apos;s create <em>something timeless.</em>
          </h2>
          <p className={styles.contactLead}>
            Tell us about your project — weddings, brand campaigns, or that idea
            you&apos;ve been holding on to. We&apos;d love to hear it.
          </p>
          <div className={styles.contactList}>
            <a href="https://luminiqmedia.com" className={styles.contactItem}>
              <Globe size={22} className={styles.contactItemIcon} strokeWidth={1.5} />
              <span className={styles.contactItemLabel}>Website</span>
              <span className={styles.contactItemValue}>luminiqmedia.com</span>
            </a>
            <a href="mailto:info@luminiqmedia.com" className={styles.contactItem}>
              <Mail size={22} className={styles.contactItemIcon} strokeWidth={1.5} />
              <span className={styles.contactItemLabel}>Email</span>
              <span className={styles.contactItemValue}>info@luminiqmedia.com</span>
            </a>
            <a href="tel:+16477749219" className={styles.contactItem}>
              <Phone size={22} className={styles.contactItemIcon} strokeWidth={1.5} />
              <span className={styles.contactItemLabel}>Phone</span>
              <span className={styles.contactItemValue}>+1 647-774-9219</span>
            </a>
          </div>
          <a href="mailto:info@luminiqmedia.com" className={styles.btnPrimary}>
            Start a Conversation <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLeft}>LUMINIQ MEDIA</div>
        <div className={styles.footerCenter}>
          &copy; {new Date().getFullYear()} Luminiq Media. All rights reserved.
        </div>
        <div className={styles.footerRight}>
          <a href="#about" className={styles.footerLink}>About</a>
          <a href="#services" className={styles.footerLink}>Services</a>
          <a href="#contact" className={styles.footerLink}>Contact</a>
        </div>
      </footer>
    </div>
  );
}

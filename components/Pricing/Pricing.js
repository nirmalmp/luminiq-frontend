'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Pricing.module.css';

const INDIVIDUAL = [
  {
    name: 'Photography',
    head: 'Property Size',
    rows: [
      ['Condo / Apartment', '$169'],
      ['Under 2,000 sqft', '$219'],
      ['2,000 to 3,500 sqft', '$269'],
      ['3,500 to 5,000 sqft', '$329'],
      ['5,000+ sqft', 'Custom Quote'],
    ],
  },
  {
    name: 'Video Services',
    head: 'Service',
    rows: [
      ['Cinematic Listing Video', '$349'],
      ['Social Media Reel (Vertical)', '$199'],
      ['Agent Walkthrough Video', '$299'],
      ['Premium Agent Branding Video', '$499'],
      ['Luxury Property Story Film', 'Starting at $899'],
    ],
  },
  {
    name: 'Drone',
    head: 'Service',
    rows: [
      ['Drone Photos', '$129'],
      ['Drone Video', '$179'],
      ['Drone Photos + Video', '$249'],
    ],
  },
  {
    name: 'Floor Plans',
    head: 'Service',
    rows: [
      ['2D Floor Plan', '$99'],
      ['3D Floor Plan', '$179'],
    ],
  },
  {
    name: 'Virtual Tours',
    head: 'Service',
    rows: [
      ['360° Tour', '$199'],
      ['Matterport Tour', '$299'],
    ],
  },
  {
    name: 'Virtual Services',
    head: 'Service',
    rows: [
      ['Virtual Staging', '$45/image'],
      ['Virtual Twilight', '$45/image'],
      ['AI Virtual Renovation', '$89/image'],
    ],
  },
  {
    name: 'Marketing',
    head: 'Service',
    rows: [
      ['Property Website', '$99'],
      ['Feature Sheets', '$59'],
      ['Neighborhood Lifestyle Reel', '$249'],
      ['Same-Day Delivery', '$149'],
    ],
  },
];

const PACKAGES = [
  {
    name: 'Essential',
    price: '$399',
    blurb: 'Perfect for condos and entry-level listings.',
    features: ['HDR Photography', 'Drone Photography', '2D Floor Plan'],
  },
  {
    name: 'Professional',
    price: '$699',
    blurb: 'Everything agents need to market a listing.',
    popular: true,
    features: [
      'HDR Photography',
      'Drone Photos',
      'Drone Video',
      'Floor Plan',
      'Social Media Reel',
      'Property Website',
    ],
    savings: 'Savings: $190',
  },
  {
    name: 'Premium',
    price: '$999',
    blurb: 'Designed for luxury listings.',
    features: [
      'HDR Photography',
      'Drone Photos',
      'Drone Video',
      'Cinematic Video',
      'Floor Plan',
      'Social Reel',
      'Virtual Twilight',
      'Property Website',
    ],
    savings: 'Savings: $350',
  },
  {
    name: 'Signature Luxury',
    price: '$1,499',
    blurb: 'The complete marketing package.',
    features: [
      'HDR Photography',
      'Cinematic Video',
      'Drone Photos',
      'Drone Video',
      'Agent Walkthrough Video',
      'Matterport Tour',
      'Social Reel',
      'Property Website',
      'Floor Plan',
      'Virtual Twilight',
      '3 Virtual Staging Images',
      'Priority Delivery',
    ],
    savings: 'Savings: $650+',
  },
];

const MEMBERSHIPS = [
  {
    name: 'Creator Membership',
    price: '$1,399',
    period: '/month',
    credits: '4 Listing Credits',
    creditIncludes: ['HDR Photography', 'Drone Photos', '2D Floor Plan'],
    benefits: ['Priority Booking', '10% Off All Add-ons', 'Online Gallery'],
  },
  {
    name: 'Growth Membership',
    price: '$2,699',
    period: '/month',
    popular: true,
    credits: '8 Listing Credits',
    benefits: ['Priority Booking', '15% Off Add-ons', 'Rush Booking Access', 'Dedicated Client Portal'],
  },
  {
    name: 'Elite Membership',
    price: '$4,999',
    period: '/month',
    credits: '15 Listing Credits',
    benefits: [
      '20% Off Add-ons',
      'Same-Day Booking Priority',
      'Dedicated Photographer',
      'Dedicated Editor',
      'White-Glove Support',
    ],
  },
];

const MEMBER_ADDONS = [
  ['Cinematic Video', '$199'],
  ['Social Reel', '$99'],
  ['Agent Walkthrough', '$199'],
  ['Matterport Tour', '$199'],
  ['Virtual Staging', '$35/image'],
  ['Virtual Twilight', '$30/image'],
  ['Property Website', 'Included with Professional Package or $69 standalone'],
  ['Same-Day Delivery', '$99'],
];

const TEAM_PLANS = [
  {
    name: 'Team 20',
    price: '$7,500',
    period: '/month',
    volume: 'Up to 20 Listings',
    groups: [
      {
        head: 'Each Listing Includes',
        items: ['HDR Photography', 'Drone Photography', '2D Floor Plan'],
      },
      {
        head: 'Included Benefits',
        items: [
          'Dedicated Photographer',
          'Dedicated Editor',
          'Next-Day Delivery',
          'Priority Scheduling',
          'Team Dashboard',
        ],
      },
    ],
    addons: [
      ['Cinematic Video', '$199'],
      ['Social Reel', '$99'],
      ['Agent Walkthrough', '$199'],
      ['Matterport', '$199'],
    ],
  },
  {
    name: 'Team 40',
    price: '$13,500',
    period: '/month',
    volume: 'Up to 40 Listings',
    groups: [
      {
        head: 'Everything in Team 20, plus',
        items: [
          'Same-Day Delivery Available',
          'Weekend Priority',
          'Marketing Consultation',
          'Custom Booking Portal',
          'Dedicated Account Manager',
        ],
      },
    ],
  },
  {
    name: 'Enterprise Brokerage',
    price: 'Custom Pricing',
    volume: 'For brokerages with 50+ listings per month',
    groups: [
      {
        head: 'Includes',
        items: [
          'Dedicated production team',
          'Multi-city coverage',
          'Priority scheduling',
          'Custom branding',
          'API/CRM integration (future-ready)',
          'White-label delivery options',
        ],
      },
    ],
  },
];

const TABS = [
  { id: 'individual', label: 'Individual Services' },
  { id: 'packages', label: 'Listing Packages' },
  { id: 'memberships', label: 'Memberships' },
  { id: 'teams', label: 'Teams & Brokerages' },
];

function Check() {
  return (
    <svg className={styles.check} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PriceTable({ head, rows }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">{head}</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, price]) => (
            <tr key={label}>
              <td>{label}</td>
              <td className={styles.price}>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IndividualPanel() {
  return (
    <>
      <p className="sectionLead">Book exactly what the listing needs, priced per service.</p>
      <div className={styles.tables}>
        {INDIVIDUAL.map((group) => (
          <div key={group.name} className={styles.tableCard}>
            <h3 className={styles.tableTitle}>{group.name}</h3>
            <PriceTable head={group.head} rows={group.rows} />
          </div>
        ))}
      </div>
    </>
  );
}

function PackagesPanel() {
  return (
    <>
      <p className="sectionLead">Bundle a full listing shoot and save against individual service pricing.</p>
      <div className={styles.packages}>
        {PACKAGES.map((p) => (
          <article key={p.name} className={`${styles.card} ${p.popular ? styles.cardPopular : ''}`}>
            {p.popular && <span className={styles.badge}>Most Popular</span>}
            <h3 className={styles.cardTitle}>{p.name}</h3>
            <p className={styles.cardPrice}>{p.price}</p>
            <p className={styles.cardBlurb}>{p.blurb}</p>

            <ul className={styles.features}>
              {p.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            {p.savings && <p className={styles.savings}>{p.savings}</p>}

            <Link href="/#contact" className={`btn ${p.popular ? 'btnPrimary' : 'btnGhost'} ${styles.cardCta}`}>
              Book {p.name}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

function MembershipsPanel() {
  return (
    <>
      <p className="sectionLead">
        Perfect for realtors who list multiple properties each month. Unlike traditional subscriptions, our memberships
        include Listing Credits. Use them anytime during the month.
      </p>

      <div className={styles.memberships}>
        {MEMBERSHIPS.map((m) => (
          <article key={m.name} className={`${styles.card} ${m.popular ? styles.cardPopular : ''}`}>
            {m.popular && <span className={styles.badge}>Most Popular</span>}
            <h3 className={styles.cardTitle}>{m.name}</h3>
            <p className={styles.cardPrice}>
              {m.price}
              <span className={styles.period}>{m.period}</span>
            </p>

            <p className={styles.credits}>
              <Check />
              {m.credits}
            </p>

            {m.creditIncludes && (
              <>
                <p className={styles.groupHead}>Each Credit Includes</p>
                <ul className={styles.plainList}>
                  {m.creditIncludes.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            <p className={styles.groupHead}>Member Benefits</p>
            <ul className={styles.features}>
              {m.benefits.map((b) => (
                <li key={b}>
                  <Check />
                  {b}
                </li>
              ))}
            </ul>

            <Link href="/#contact" className={`btn ${m.popular ? 'btnPrimary' : 'btnGhost'} ${styles.cardCta}`}>
              Start {m.name.replace(' Membership', '')}
            </Link>
          </article>
        ))}
      </div>

      <div className={`${styles.tableCard} ${styles.addonCard}`}>
        <h3 className={styles.tableTitle}>Premium Add-ons (Members Only)</h3>
        <p className={styles.addonNote}>
          Premium services such as cinematic video, Matterport, and agent walkthroughs can be added at discounted member
          pricing.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Member Price</th>
              </tr>
            </thead>
            <tbody>
              {MEMBER_ADDONS.map(([label, price]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td className={styles.price}>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function TeamsPanel() {
  return (
    <>
      <p className="sectionLead">
        For high-performing teams and brokerages with consistent monthly listing volume.
      </p>

      <div className={styles.teams}>
        {TEAM_PLANS.map((t) => (
          <article key={t.name} className={styles.card}>
            <h3 className={styles.cardTitle}>{t.name}</h3>
            <p className={styles.cardPrice}>
              {t.price}
              {t.period && <span className={styles.period}>{t.period}</span>}
            </p>
            <p className={styles.cardBlurb}>{t.volume}</p>

            {t.groups.map((g) => (
              <div key={g.head}>
                <p className={styles.groupHead}>{g.head}</p>
                <ul className={styles.features}>
                  {g.items.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {t.addons && (
              <>
                <p className={styles.groupHead}>Member Add-on Pricing</p>
                <ul className={styles.addonList}>
                  {t.addons.map(([label, price]) => (
                    <li key={label}>
                      <span>{label}</span>
                      <span className={styles.price}>{price}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link href="/#contact" className={`btn btnGhost ${styles.cardCta}`}>
              Talk to Us
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

const PANELS = {
  individual: IndividualPanel,
  packages: PackagesPanel,
  memberships: MembershipsPanel,
  teams: TeamsPanel,
};

export default function Pricing() {
  const [active, setActive] = useState('individual');
  const tabRefs = useRef({});

  const onKeyDown = (e) => {
    const i = TABS.findIndex((t) => t.id === active);
    let next = null;

    if (e.key === 'ArrowRight') next = TABS[(i + 1) % TABS.length];
    if (e.key === 'ArrowLeft') next = TABS[(i - 1 + TABS.length) % TABS.length];
    if (e.key === 'Home') next = TABS[0];
    if (e.key === 'End') next = TABS[TABS.length - 1];

    if (next) {
      e.preventDefault();
      setActive(next.id);
      tabRefs.current[next.id]?.focus();
    }
  };

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <span className="eyebrow">Pricing</span>
          <h1 className={styles.title}>Straightforward pricing for every listing</h1>
          <p className={styles.lead}>
            Book a single service, bundle a listing package, or put your whole month on a membership. Every price below
            is what you pay, with no hidden production fees.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.tabs} role="tablist" aria-label="Pricing options" onKeyDown={onKeyDown}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={active === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={active === tab.id ? 0 : -1}
                className={`${styles.tab} ${active === tab.id ? styles.tabActive : ''}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {TABS.map((tab) => {
            const Panel = PANELS[tab.id];
            return (
              <div
                key={tab.id}
                className={styles.panel}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                tabIndex={0}
                hidden={active !== tab.id}
              >
                <Panel />
              </div>
            );
          })}

          <div className={styles.footCta}>
            <h2 className={styles.footTitle}>Not sure which fits?</h2>
            <p className={styles.footLead}>
              Tell us about the property and we&apos;ll put together the right package.
            </p>
            <Link href="/#contact" className="btn btnPrimary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

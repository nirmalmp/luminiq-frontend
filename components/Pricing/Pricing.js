'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Pricing.module.css';

/*
 * Packages are named by market intent rather than by what is technically in the
 * box, so an agent picks by the listing in front of them. The feature matrix
 * below carries the detail.
 */
const PACKAGES = [
  { id: 'launch', name: 'Launch', price: '$399', bestFor: 'Condos & Leases' },
  { id: 'elevate', name: 'Elevate', price: '$699', bestFor: 'Standard Resale', popular: true },
  { id: 'showcase', name: 'Showcase', price: '$999', bestFor: 'High-End Homes' },
  { id: 'signature', name: 'Signature', price: '$1,499', bestFor: 'Luxury Estates' },
];

/* [label, included in each package, in PACKAGES order]. */
const PACKAGE_FEATURES = [
  ['HDR Photos', [true, true, true, true]],
  ['2D Floor Plan', [true, true, true, true]],
  ['Aerial Drone Stills', [true, true, true, true]],
  ['Aerial Drone Video', [false, true, true, true]],
  ['Social Media Reel', [false, true, true, true]],
  ['Property Website', [false, true, true, true]],
  ['Cinematic Video', [false, false, true, true]],
  ['Virtual Twilight', [false, false, true, true]],
  ['Agent Walkthrough Video', [false, false, false, true]],
  ['3D Matterport Tour', [false, false, false, true]],
  ['3 Virtual Staging Edits', [false, false, false, true]],
];

/*
 * Deliberately unpriced. Add-on pricing is configured in the booking flow once
 * a package is chosen, which keeps this page to four numbers instead of thirty.
 */
const ADDONS = [
  '3D Matterport Tours',
  'Virtual Staging & AI Decluttering',
  'Day-to-Dusk Twilight Conversions',
  'Neighborhood Lifestyle Reels',
  'Same-Day Express Media Delivery',
];

/*
 * Memberships sell Listing Credits rather than all-inclusive months, so heavy
 * video and editing work stays an add-on instead of eating the margin.
 */
const CREDIT_INCLUDES = 'Photos, Drone Stills & 2D Floor Plan per listing';

const MEMBERSHIPS = [
  {
    name: 'Creator Plan',
    price: '$1,399',
    period: '/month',
    credits: '4 Listing Credits',
    benefits: ['10% Off All Media Add-Ons', 'Priority Booking Access'],
  },
  {
    name: 'Growth Plan',
    price: '$2,699',
    period: '/month',
    popular: true,
    credits: '8 Listing Credits',
    benefits: ['15% Off All Media Add-Ons', 'Rush Delivery & Booking Priority', 'Dedicated Client Portal'],
  },
  {
    name: 'Elite Plan',
    price: '$4,899',
    period: '/month',
    credits: '15 Listing Credits',
    benefits: ['20% Off All Media Add-Ons', 'Guaranteed Next-Day Delivery', 'Dedicated Photographer & Lead Editor'],
  },
];

const TABS = [
  { id: 'packages', label: 'Listing Packages' },
  { id: 'addons', label: 'Add-Ons' },
  { id: 'memberships', label: 'Memberships' },
  { id: 'teams', label: 'Teams & Brokerages' },
];

function Check({ className }) {
  return (
    <svg
      className={className || styles.check}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function PackagesPanel() {
  return (
    <>
      <p className="sectionLead">
        Four ways to take a listing to market. Pick by the property, not by the spec sheet.
      </p>

      {/* Scrolls sideways on narrow screens; the feature column stays pinned. */}
      <div className={styles.matrixWrap} tabIndex={0} role="group" aria-label="Package comparison, scrollable">
        <table className={styles.matrix}>
          <caption className={styles.srOnly}>Listing package feature comparison</caption>
          <thead>
            <tr>
              <th scope="col" className={styles.matrixCorner}>
                Feature
              </th>
              {PACKAGES.map((p) => (
                <th key={p.id} scope="col" className={p.popular ? styles.colPopular : undefined}>
                  {p.popular && <span className={styles.badge}>Most Popular</span>}
                  <span className={styles.matrixName}>{p.name}</span>
                  <span className={styles.matrixPrice}>{p.price}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className={styles.bestForRow}>
              <th scope="row" className={styles.matrixCorner}>
                Best For
              </th>
              {PACKAGES.map((p) => (
                <td key={p.id} className={p.popular ? styles.colPopular : undefined}>
                  {p.bestFor}
                </td>
              ))}
            </tr>

            {PACKAGE_FEATURES.map(([label, flags]) => (
              <tr key={label}>
                <th scope="row" className={styles.matrixCorner}>
                  {label}
                </th>
                {flags.map((included, i) => (
                  <td key={PACKAGES[i].id} className={PACKAGES[i].popular ? styles.colPopular : undefined}>
                    {included ? (
                      <>
                        <Check className={styles.matrixCheck} />
                        <span className={styles.srOnly}>Included</span>
                      </>
                    ) : (
                      <>
                        <span className={styles.no} aria-hidden="true">
                          —
                        </span>
                        <span className={styles.srOnly}>Not included</span>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td className={styles.matrixCorner} />
              {PACKAGES.map((p) => (
                <td key={p.id} className={p.popular ? styles.colPopular : undefined}>
                  <Link
                    href="/#contact"
                    className={`btn ${p.popular ? 'btnPrimary' : 'btnGhost'} ${styles.matrixCta}`}
                  >
                    Book {p.name}
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

function AddonsPanel() {
  return (
    <>
      <p className="sectionLead">
        Every package can be extended. Add-ons are priced and configured during checkout once you&apos;ve chosen a
        package, so you only ever see the options that apply to your listing.
      </p>

      <ul className={styles.addonGrid}>
        {ADDONS.map((addon) => (
          <li key={addon} className={styles.addonItem}>
            <Check />
            {addon}
          </li>
        ))}
      </ul>

      <p className={styles.addonNote}>
        Need customised media assets or a single-service booking? Select your package and customise add-ons at
        checkout, or <Link href="/#contact">talk to us</Link> and we&apos;ll build it around the property.
      </p>
    </>
  );
}

function MembershipsPanel() {
  return (
    <>
      <p className="sectionLead">
        For agents listing consistently every month. Memberships run on Listing Credits — use them whenever you need
        them, and add premium media at member rates.
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
            <p className={styles.creditNote}>{CREDIT_INCLUDES}</p>

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
              Start {m.name.replace(' Plan', '')}
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}

function TeamsPanel() {
  return (
    <div className={styles.teamCard}>
      <h3 className={styles.teamTitle}>High-Volume Teams &amp; Brokerages</h3>
      <p className={styles.teamLead}>
        Producing 20+ listings a month? We build custom retainer agreements with dedicated production teams,
        white-label marketing delivery, and custom CRM integrations.
      </p>
      <Link href="/#contact" className={`btn btnPrimary ${styles.teamCta}`}>
        Schedule a Brokerage Consultation
      </Link>
    </div>
  );
}

const PANELS = {
  packages: PackagesPanel,
  addons: AddonsPanel,
  memberships: MembershipsPanel,
  teams: TeamsPanel,
};

export default function Pricing() {
  const [active, setActive] = useState('packages');
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
            Choose the package that matches the property, or put a consistent month of listings on a membership. Every
            price below is what you pay, with no hidden production fees.
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

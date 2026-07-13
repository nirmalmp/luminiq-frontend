'use client';

import { useState } from 'react';
import { submitQuote } from '@/lib/submitQuote';
import styles from './QuoteForm.module.css';

const SERVICES = ['Video Tour', 'Photography', 'Aerial / Drone', '3D Virtual Tour', 'Full Package', 'Not sure yet'];

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  date: '',
  message: '',
};

export default function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await submitQuote(form);
      if (!res?.ok) throw new Error('submit failed');
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span className={styles.check} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h3>Thanks, request received!</h3>
        <p>We&apos;ll be in touch within 24 hours to confirm availability and pricing.</p>
        <button type="button" className="btn btnGhost" onClick={() => setStatus('idle')}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h3 className={styles.formTitle}>Request a quote</h3>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" value={form.name} onChange={update} required placeholder="Your name" autoComplete="name" />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" value={form.email} onChange={update} required placeholder="you@email.com" autoComplete="email" />
        </label>

        <label className={styles.field}>
          <span>Phone</span>
          <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="(647) 000-0000" autoComplete="tel" />
        </label>

        <label className={styles.field}>
          <span>Service</span>
          <select name="service" value={form.service} onChange={update} required>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className={`${styles.field} ${styles.full}`}>
          <span>Property address</span>
          <input name="address" value={form.address} onChange={update} placeholder="Street, City" autoComplete="off" />
        </label>

        <label className={styles.field}>
          <span>Preferred date</span>
          <input type="date" name="date" value={form.date} onChange={update} />
        </label>

        <label className={`${styles.field} ${styles.full}`}>
          <span>Details</span>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            rows={4}
            placeholder="Square footage, what you're looking for, timeline…"
          />
        </label>
      </div>

      {status === 'error' && (
        <p className={styles.errorMsg} role="alert">
          Something went wrong sending your request. Please try again or call us directly.
        </p>
      )}

      <button type="submit" className={`btn btnPrimary ${styles.submit}`} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send request'}
      </button>

      <p className={styles.note}>We&apos;ll never share your details. Typical reply within 24 hours.</p>
    </form>
  );
}

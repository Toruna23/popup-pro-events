"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitBooking } from '../../../../lib/api';
import styles from './BookForm.module.css';

export default function BookFormPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  function isLoggedIn() {
    // Simulate auth: check if 'user' exists in localStorage
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('user');
    }
    return false;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isLoggedIn()) {
      router.push('/login');
      return;
    }
    setLoading(true);
    setSuccess(false);
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      surname: (form.elements.namedItem('surname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      website: (form.elements.namedItem('website') as HTMLInputElement).value,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      location: (form.elements.namedItem('location') as HTMLInputElement).value,
      details: (form.elements.namedItem('details') as HTMLInputElement).value,
      budget: (form.elements.namedItem('budget') as HTMLInputElement).value,
      guests: (form.elements.namedItem('guests') as HTMLInputElement).value,
    };
    await submitBooking(data);
    setLoading(false);
    setSuccess(true);
    form.reset();
  }

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Request Booking</h2>
      {success && <div className={styles.success}>Booking request sent!</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          First Name
          <input name="firstName" type="text" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Surname
          <input name="surname" type="text" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Email
          <input name="email" type="email" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Phone Number
          <input name="phone" type="tel" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Company Name (optional)
          <input name="company" type="text" className={styles.input} />
        </label>
        <label className={styles.label}>
          Company Website (optional)
          <input name="website" type="url" className={styles.input} />
        </label>
        <label className={styles.label}>
          Event Date
          <input name="date" type="date" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Event Location
          <input name="location" type="text" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Number of Guests (optional)
          <input name="guests" type="number" min="1" className={styles.input} />
        </label>
        <label className={styles.label}>
          Project / Event Details
          <textarea name="details" className={styles.input} rows={4} required />
        </label>
        <label className={styles.label}>
          Estimated Budget (optional)
          <input name="budget" type="text" className={styles.input} />
        </label>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </main>
  );
} 
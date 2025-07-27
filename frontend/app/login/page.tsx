'use client';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  function handleGoogleLogin() {
    // Simulate Google login
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', 'googleuser');
      router.push('/');
    }
  }

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Email
          <input type="email" className={styles.input} required />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" className={styles.input} required />
        </label>
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <button className={styles.googleButton} onClick={handleGoogleLogin} type="button">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/google.svg" alt="Google" style={{width: 20, marginRight: 8, verticalAlign: 'middle'}} />
        Continue with Google
      </button>
    </main>
  );
} 
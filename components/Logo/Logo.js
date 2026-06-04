import Image from 'next/image';
import styles from './Logo.module.css';

/**
 * Brand lockup: the camera mark extracted from the business card (public/logo.png)
 * + "Luminiq Media" wordmark. Uses next/image so the static-export basePath
 * prefix is applied automatically in production.
 */
export default function Logo({ compact = false }) {
  return (
    <span className={styles.logo} aria-label="Luminiq Media">
      <Image className={styles.mark} src="/logo.png" alt="Luminiq Media camera logo" width={302} height={174} priority />
      {!compact && (
        <span className={styles.words}>
          <span className={styles.script}>Luminiq</span>
          <span className={styles.media}>Media</span>
        </span>
      )}
    </span>
  );
}

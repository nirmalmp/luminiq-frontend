import Image from 'next/image';
import camera from './camera.png';
import styles from './Logo.module.css';

/**
 * Brand lockup: the camera mark extracted from the business card + "Luminiq
 * Media" wordmark. The mark is a STATIC IMPORT (camera.png) so Next emits a
 * basePath-prefixed, hashed URL — a plain "/logo.png" src does not get the
 * basePath under static export and 404s on the GitHub Pages subpath.
 */
export default function Logo({ compact = false }) {
  return (
    <span className={styles.logo} aria-label="Luminiq Media">
      <Image className={styles.mark} src={camera} alt="Luminiq Media camera logo" priority />
      {!compact && (
        <span className={styles.words}>
          <span className={styles.script}>Luminiq</span>
          <span className={styles.media}>Media</span>
        </span>
      )}
    </span>
  );
}

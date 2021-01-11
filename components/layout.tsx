import Link from 'next/link';

import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
/* A Top level componenet */

const name = '[Samuel Reid]';

// Shared across all pages that is wrapped inside this componenet
export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <div className={styles.container}>
      <header>
        {home ? (
          <>
            <img src='/images/nebula.jpg' className={`${styles.headerHomeImage}        ${utilStyles.borderCircle}`} alt='logo' />
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <img src='/images/nebula.jpg' alt='logo' />
              </a>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      <Link href='/'>
        <a>← Back to home</a>
      </Link>
    </div>
  );
}

import styles from './layout.module.css';

// Shared across all pages that is wrapped inside this componenet
export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

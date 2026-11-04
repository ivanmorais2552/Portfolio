import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/" aria-label="Ivan Morais home">
        IM<span className={styles.wordmarkDot}>.</span>
      </Link>
      <nav className={styles.navigation} aria-label="Main navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className={styles.contactLink}>
          Let&apos;s talk <ArrowUpRight size={14} />
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const pathname = usePathname();
  const isWorkActive = pathname === '/work' || pathname.startsWith('/work/');

  return (
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/" aria-label="Ivan Morais home">
        IM<span className={styles.wordmarkDot}>.</span>
      </Link>
      <nav className={styles.navigation} aria-label="Main navigation">
        <Link
          className={`${styles.homeLink} ${pathname === '/' ? styles.active : ''}`}
          href="/"
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          className={isWorkActive ? styles.active : ''}
          href="/work"
          aria-current={isWorkActive ? 'page' : undefined}
        >
          Work
        </Link>
        <Link
          className={pathname === '/about' ? styles.active : ''}
          href="/about"
          aria-current={pathname === '/about' ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${styles.contactLink} ${pathname === '/contact' ? styles.active : ''}`}
          aria-current={pathname === '/contact' ? 'page' : undefined}
        >
          Let&apos;s talk <ArrowUpRight size={14} />
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { contactDetails } from '@/features/contact/data/contactDetails';
import layoutStyles from '@/styles/Layout.module.css';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} ${layoutStyles.pageContainer}`}>
      <span>© 2026 Ivan Morais</span>
      <span>Designed &amp; built with intention.</span>
      <nav className={styles.links} aria-label="Footer links">
        <a href={contactDetails.emailHref} aria-label={`Email ${contactDetails.email}`}>
          Email
        </a>
        <a
          href={contactDetails.linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Ivan Morais on LinkedIn (opens in a new tab)"
        >
          LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}

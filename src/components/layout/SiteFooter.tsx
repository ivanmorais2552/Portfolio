import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import layoutStyles from '@/styles/Layout.module.css';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} ${layoutStyles.pageContainer}`}>
      <span>© 2026 Ivan Morais</span>
      <span>Designed &amp; built with intention.</span>
      <Link href="/contact">
        Contact <ArrowUpRight size={14} />
      </Link>
    </footer>
  );
}

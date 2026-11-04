import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="site-footer page-container">
      <span>© 2026 Ivan Morais</span>
      <span>Designed &amp; built with intention.</span>
      <Link href="/contact">
        Contact <ArrowUpRight size={14} />
      </Link>
    </footer>
  );
}

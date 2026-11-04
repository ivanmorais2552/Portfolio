import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ivan Morais home">
        IM<span className="wordmark-dot">.</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact" className="nav-contact">
          Let&apos;s talk <ArrowUpRight size={14} />
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

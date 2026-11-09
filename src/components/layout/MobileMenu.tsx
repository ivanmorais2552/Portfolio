'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import styles from './MobileMenu.module.css';

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

type MobileMenuProps = {
  pathname: string;
};

export function MobileMenu({ pathname }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      if (rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
      if (rootRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
    }

    window.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsidePointer);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia('(min-width: 701px)');

    function closeAtDesktop() {
      if (!desktop.matches) return;
      const focusWasInMenu =
        rootRef.current?.contains(document.activeElement) ||
        document.activeElement === document.body;
      setOpen(false);
      if (focusWasInMenu) {
        const destination =
          document.querySelector<HTMLAnchorElement>('header nav > a[aria-current="page"]') ??
          document.querySelector<HTMLAnchorElement>('header a[aria-label="Ivan Morais home"]');
        destination?.focus();
      }
    }

    closeAtDesktop();
    desktop.addEventListener('change', closeAtDesktop);
    window.addEventListener('resize', closeAtDesktop);
    return () => {
      desktop.removeEventListener('change', closeAtDesktop);
      window.removeEventListener('resize', closeAtDesktop);
    };
  }, [open]);

  function closeAfterNavigation() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div
      className={styles.root}
      ref={rootRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        className={styles.trigger}
        type="button"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
      </button>
      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
        id="mobile-site-menu"
        aria-hidden={!open}
        inert={!open}
      >
        {navigationItems.map((item, index) => {
          const active =
            item.href === '/work'
              ? pathname === '/work' || pathname.startsWith('/work/')
              : pathname === item.href;

          return (
            <Link
              href={item.href}
              key={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              aria-current={active ? 'page' : undefined}
              onClick={closeAfterNavigation}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

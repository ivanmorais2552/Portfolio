import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SiteFooter } from '@/components/layout/SiteFooter';
import layoutStyles from '@/styles/Layout.module.css';

export const metadata: Metadata = {
  title: 'Ivan Morais — Product designer and developer',
  description:
    'Portfolio of Ivan Morais, a product designer and developer working at the intersection of experience, engineering, and business.',
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ThemeProvider />
        <div className={layoutStyles.siteShell}>
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

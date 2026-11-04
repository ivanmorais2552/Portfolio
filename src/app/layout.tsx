import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Ivan Morais — Product designer and developer",
  description: "Portfolio of Ivan Morais, a product designer and developer working at the intersection of experience, engineering, and business.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ThemeProvider /><div className="site-shell"><SiteHeader />{children}<SiteFooter /></div></body></html>;
}

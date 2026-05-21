import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/profile';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Front End Engineer`,
    template: `%s | ${site.name}`,
  },
  description: `${site.fullName} — ${site.headline} with ${site.yearsExperience} years building web apps with React, TypeScript, and Next.js.`,
  keywords: ['Front End Engineer', 'React', 'TypeScript', 'Next.js', 'Web Development'],
  icons: {
    icon: '/favicon-32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

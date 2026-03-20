import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0ea5e9',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.theenadayalan.me'),
  title: {
    default: 'Theenadayalan | Front End Engineer',
    template: '%s | Theenadayalan',
  },
  description:
    "Theenadayalan — Senior Frontend Engineer at Apollo.io. 7+ years building web apps with React, TypeScript, Next.js.",
  keywords: ['Front End Engineer', 'React', 'TypeScript', 'Next.js', 'Web Development'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Theenadayalan',
    url: 'https://www.theenadayalan.me',
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
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

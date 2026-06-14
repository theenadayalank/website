'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/profile';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
];

const sectionLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-800 transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
        >
          THEENA
        </Link>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {isHome && (
            <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
              {sectionLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {isHome && <div className="hidden h-4 w-px shrink-0 bg-slate-200 dark:bg-slate-700 sm:block" aria-hidden />}

          <ul className="flex items-center gap-4">
            {navLinks.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== '/' && pathname?.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

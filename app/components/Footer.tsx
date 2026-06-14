import { site, social } from '@/lib/profile';

const externalLinks = [
  { href: social.github, label: 'GitHub' },
  { href: social.linkedin, label: 'LinkedIn' },
  { href: social.twitter, label: 'Twitter' },
];

const emailLink = { href: `mailto:${site.email}`, label: 'Email' };

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {externalLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              aria-label={label}
            >
              {label}
            </a>
          ))}
          <a
            href={emailLink.href}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-primary"
            aria-label={emailLink.label}
          >
            {emailLink.label}
          </a>
        </nav>
        <small className="text-sm text-slate-500 dark:text-slate-400">
          © {site.name} {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}

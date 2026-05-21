import Image from 'next/image';
import Link from 'next/link';
import { overview, site } from '@/lib/profile';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-slate-800 text-white"
    >
      <Image
        src="/img/header-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-slate-800" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-300">
          {site.headline}
        </p>
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {site.fullName}
        </h1>
        <p className="mt-6 text-lg text-slate-200 md:text-xl">
          {overview.summary}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-white shadow-lg transition-colors hover:bg-primary-dark focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
          >
            View profile
          </Link>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}

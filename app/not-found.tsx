import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="text-slate-600 dark:text-slate-400 mt-2">There&apos;s nothing here.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
      >
        Go to Home
      </Link>
    </div>
  );
}

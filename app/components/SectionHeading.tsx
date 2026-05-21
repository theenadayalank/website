interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      <div aria-hidden className="mx-auto mt-3 h-0.5 w-12 bg-primary" />
      {subtitle && (
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          <em>{subtitle}</em>
        </p>
      )}
    </div>
  );
}

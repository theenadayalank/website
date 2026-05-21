import { experience } from '@/lib/profile';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-wide">
        <SectionHeading title="Experience" subtitle="Reflection of my journey" />

        <div className="mx-auto max-w-3xl space-y-8">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.duration}`}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-sm dark:border-slate-700 dark:bg-slate-900/50"
            >
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{job.role}</p>
                  <p className="text-slate-600 dark:text-slate-400">{job.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                </div>
                <p className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {job.duration}
                </p>
              </div>
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {job.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

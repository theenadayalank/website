import { education } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container-wide">
        <SectionHeading title="EDUCATION" />
        <article className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-900/50">
          <p className="font-semibold text-slate-900 dark:text-white">
            {education.degree}
          </p>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            {education.school}
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {education.period} · {education.location}
          </p>
        </article>
      </div>
    </section>
  );
}

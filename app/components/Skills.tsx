import { skills } from '@/lib/profile';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-wide">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-primary/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

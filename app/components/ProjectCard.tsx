import type { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const links = [
    ...(project.links ?? []),
    ...(project.github ? [{ label: 'Code', href: project.github }] : []),
    ...(project.live ? [{ label: 'Live', href: project.live }] : []),
  ];

  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-primary/30">
      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <div className="mb-4 h-0.5 w-10 bg-primary" aria-hidden />
      <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>
      {project.impact && (
        <p className="mb-2 text-sm font-medium text-primary">{project.impact}</p>
      )}
      {project.techStack.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:text-primary-dark hover:underline"
          >
            {label}
          </a>
        ))}
      </div>
      {project.date && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{project.date}</p>
      )}
    </article>
  );
}

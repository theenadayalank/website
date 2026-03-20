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
    <article className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-200">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <div className="w-10 h-0.5 bg-primary mb-4" />
      <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      {project.impact && (
        <p className="text-sm font-medium text-primary mb-2">{project.impact}</p>
      )}
      {project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
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
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          {project.date}
        </p>
      )}
    </article>
  );
}

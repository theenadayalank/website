import { projects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          PROJECTS
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          <em>Things I&apos;ve built</em>
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

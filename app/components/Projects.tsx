import { projects } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-wide">
        <SectionHeading title="PROJECTS" subtitle="Things I've built" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

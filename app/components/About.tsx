import Image from "next/image";
import { overview, site } from "@/lib/profile";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-wide">
        <SectionHeading title="About me" subtitle={site.tagline} />
        <p className="mx-auto mb-6 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400">
          {overview.summary}
        </p>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-400">
          {overview.extended}
        </p>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-start">
          <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-lg dark:border-slate-700 dark:bg-slate-800 md:h-80 md:w-80">
            <Image
              src="/img/profile.jpg"
              alt={site.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white">
              {site.fullName}
            </p>
            <p>{site.degree}</p>
            <p>
              {site.title} · {site.location}
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

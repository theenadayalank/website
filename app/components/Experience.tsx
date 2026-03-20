const experience = [
  {
    role: 'Senior Frontend Engineer I',
    company: 'Apollo.io',
    duration: 'Present',
    location: 'Bangalore (Remote)',
    workItems: [
      'Building scalable frontend solutions for Apollo\'s sales intelligence platform.',
    ],
  },
  {
    role: 'Senior Software Engineer - Frontend',
    company: 'United Overseas Bank Limited',
    duration: 'July 2022 – 2024',
    location: 'Singapore',
    workItems: [
      'Spearheaded the development of Micro Frontend Architecture, improving system scalability by 30% and reducing integration time by 25%.',
      'Collaborated with a leading investment bank in Singapore, developing new transaction types for cross-border transfers.',
      'Conducted unit testing using Jest, ensuring robust and maintainable code quality.',
    ],
  },
  {
    role: 'Senior Software Engineer - Frontend',
    company: "BYJU's",
    duration: 'December 2020 – July 2022',
    location: 'Bangalore',
    workItems: [
      'Helped the world\'s leading EduTech platform develop top-notch initiatives as part of the BYJUs Classes Growth team.',
      'Mentored junior developers on design practices and code optimization.',
      'Maintained the frontend codebase of BYJU\'s live class platform, enhancing user experience and performance.',
    ],
  },
  {
    role: 'Front End Engineer',
    company: 'ZOHO Corporation',
    duration: 'June 2017 – November 2020',
    location: 'Chennai',
    workItems: [
      'Developed and maintained the front-end of Zoho\'s internal CI/CD tools, supporting multiple production-level products.',
      'Built and optimized tools for Zoho Books Web Platform, accelerating build deployments and streamlining testing.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          EXPERIENCE
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          <em>Reflection of my journey</em>
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.duration}`}
              className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900/50"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {job.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">{job.company}</p>
                  {job.location && (
                    <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0">
                  {job.duration}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                {job.workItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

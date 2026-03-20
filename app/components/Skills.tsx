const skills = [
  { name: 'ReactJS', level: 95 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'Jest / Testing', level: 80 },
  { name: 'Agile / CI-CD', level: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          SKILLS
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          <em>Technologies I work with</em>
        </p>

        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

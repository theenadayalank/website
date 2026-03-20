import Image from 'next/image';

const profile = {
  name: 'THEENADAYALAN KALIAMURTHY',
  degree: 'B.Tech (Computer Science & Engineering)',
  role: 'Senior Frontend Engineer I',
  company: 'Apollo.io',
  location: 'Bangalore, India (Remote)',
};

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          ABOUT ME
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-center text-slate-600 dark:text-slate-400 mb-6">
          <em>Solve Together!</em>
        </p>
        <p className="text-lg text-center max-w-2xl mx-auto mb-6">
          An enthusiastic web developer with 7+ years of experience, passionate
          about building innovative solutions using cutting-edge technologies
          and Agile methodologies. Actively contributing to the community that
          inspires me.
        </p>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12">
          I&apos;ve built scalable frontend architectures, mentored developers, and
          delivered user-centric products at companies like Apollo.io, UOB, and
          BYJU&apos;s. I excel in <strong>React</strong>, <strong>TypeScript</strong>,
          and modern tooling, with a strong belief in clean code and
          collaboration.
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 shadow-lg">
            <Image
              src="/img/profile.jpg"
              alt="Theenadayalan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
              priority
            />
          </div>
          <div className="space-y-3 text-slate-700 dark:text-slate-300">
            <p className="font-semibold text-slate-900 dark:text-white">{profile.name}</p>
            <p>{profile.degree}</p>
            <p>{profile.role} · {profile.company}</p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

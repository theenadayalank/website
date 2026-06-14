export const site = {
  name: "Theenadayalan",
  fullName: "THEENADAYALAN KALIAMURTHY",
  headline: "Senior Frontend Engineer",
  tagline: "Solve Together!",
  email: "theenadayalan06@gmail.com",
  location: "Pondicherry, India",
  company: "Apollo.io",
  degree: "B.Tech. in Computer Science and Engineering",
  resumePath: "/Theenadayalan_Resume.pdf",
  url: "https://www.theenadayalan.netlify.app",
  yearsExperience: "9+",
} as const;

export const social = {
  github: "https://github.com/theenadayalank",
  linkedin: "https://www.linkedin.com/in/theenadayalan",
  twitter: "https://twitter.com/theenadayalan_k",
} as const;

export const overview = {
  summary:
    "Senior Frontend Engineer with 9+ years of experience architecting scalable, high-performance web applications across fintech, edtech, and SaaS. Expertise in React.js, TypeScript, Micro Frontend Architecture, Web Accessibility (a11y), and REST APIs.",
  extended:
    "Proven record of owning end-to-end feature delivery, driving architecture decisions, mentoring engineers, and leveraging AI-assisted workflows to maximise productivity.",
} as const;

export const education = {
  degree: "B.Tech. in Computer Science and Engineering",
  school: "Pondicherry University",
  period: "2013 – 2017",
  location: "Pondicherry, India",
  gpa: "8.4 / 10",
} as const;

export const skills = [
  // Frontend
  "React.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Next.js",
  "HTML5",
  "CSS3",
  "SCSS",
  "Tailwind CSS",
  // Architecture
  "Micro Frontends",
  "Module Federation",
  "Web Accessibility (a11y)",
  "REST APIs",
  // Testing
  "Vitest",
  "Playwright",
  "Jest",
  // AI & Tooling
  "Cursor AI",
  "Claude Code",
  "Node.js",
  "Git",
  "CI/CD",
] as const;

export interface ExperienceEntry {
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Apollo.io",
    duration: "April 2025 – May 2026",
    location: "Remote, India",
    highlights: [
      "Single-handedly engineered the end-to-end UX for AI Sequence Builder, a core AI-powered feature on Apollo.io's sales engagement platform, driving measurable pipeline adoption.",
      "Tracked and improved feature adoption using Amplitude Experiments and custom analytics dashboards, enabling data-informed iterations and executive-level reporting.",
      "Adopted Cursor AI and Claude Code for AI-assisted development workflows; authored E2E and unit test coverage with Vitest and Playwright to reduce regression risk.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "SCSS",
      "REST APIs",
      "Vitest",
      "Playwright",
      "Amplitude",
      "Cursor AI",
      "Claude Code",
      "Git",
      "CI/CD",
    ],
  },
  {
    role: "Senior Software Engineer – Frontend",
    company: "United Overseas Bank (UOB)",
    duration: "July 2022 – April 2025",
    location: "Singapore",
    highlights: [
      "Architected a Micro Frontend Architecture using Webpack Module Federation, enabling independent deployments across 3+ banking product teams and reducing inter-team release bottlenecks by ~20%.",
      "Built scalable, accessible transaction flow modules for cross-border fund transfers, meeting WCAG 2.1 / a11y and financial compliance standards across investment banking platforms.",
      "Partnered with backend and QA teams to integrate complex REST APIs into high-value banking workflows, ensuring reliability and correctness for critical financial operations.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "TypeScript",
      "SCSS",
      "REST APIs",
      "Webpack Module Federation",
      "Web Accessibility (a11y)",
      "Git",
      "CI/CD",
    ],
  },
  {
    role: "Senior Software Engineer – Frontend",
    company: "BYJU'S",
    duration: "December 2020 – July 2022",
    location: "Remote, India",
    highlights: [
      "Owned critical frontend features for BYJU'S live learning platform serving thousands of concurrent students as part of the Classes Growth team.",
      "Mentored junior engineers through code pairing and structured code reviews, raising team engineering standards and accelerating onboarding.",
      "Integrated Agora RTC/RTM SDKs to power real-time video and messaging in live classes, improving session reliability and student engagement.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "SCSS",
      "CSS-in-JS",
      "Material UI",
      "Agora RTC/RTM",
      "REST APIs",
      "Git",
      "JIRA",
    ],
  },
  {
    role: "Front End Engineer",
    company: "ZOHO Corporation",
    duration: "June 2017 – November 2020",
    location: "Chennai, India",
    highlights: [
      "Designed and built an Ember.js CI/CD tooling platform automating build and deployment pipelines across multiple Zoho Finance production products.",
      "Developed a Vue.js server performance monitoring client, providing real-time infrastructure visibility via REST API integrations.",
    ],
    technologies: [
      "Ember.js",
      "Vue.js",
      "Node.js",
      "JavaScript",
      "ES6",
      "SCSS",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "CI/CD",
    ],
  },
];

export const achievements = [
  {
    title: "Firefox Quantum Extensions Challenge 2018",
    description:
      "YouTabMan was shortlisted among the top five extensions in Mozilla's Firefox Quantum Extensions Challenge.",
  },
] as const;

export const languages = ["English", "Tamil"] as const;

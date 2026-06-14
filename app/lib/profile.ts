export const site = {
  name: "Theenadayalan",
  fullName: "THEENADAYALAN KALIAMURTHY",
  headline: "Senior Frontend Engineer",
  tagline: "Solve Together!",
  email: "theenadayalan06@gmail.com",
  location: "India",
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
    "Senior Frontend Engineer with 9+ years of experience building scalable React and TypeScript applications across fintech, SaaS, and edtech domains.",
  extended:
    "Specialized in frontend architecture, performance optimization, and developer experience with a strong belief in clean code, mentorship, and collaboration.",
} as const;

export const education = {
  degree: "B.Tech. in Computer Science and Engineering",
  school: "Pondicherry University",
  period: "2013 – 2017",
  location: "Pondicherry, India",
} as const;

export const skills = [
  "ReactJS",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Micro Frontends",
  "Cursor AI",
  "Claude Code",
  "Playwright",
  "Vitest",
  "HTML5",
  "CSS3",
  "SCSS",
  "Node.js",
  "CI/CD",
  "Git",
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
      "Part of Apollo.io's Core AI Apps team, building and maintaining AI-powered features across the sales engagement platform.",
      "Single-handedly developed the user experience for AI Sequence Builder and tracked feature adoption using Amplitude Experiments and analytics reports.",
      "Participated in quarterly planning, product discussions, and architecture reviews by contributing engineering feedback, UX improvements, and technical insights.",
      "Leveraged modern AI-assisted development workflows using Cursor AI and Claude Code to improve engineering productivity and development efficiency.",
    ],
    technologies: [
      "ReactJS",
      "TypeScript",
      "Redux",
      "SCSS",
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
    role: "Senior Software Engineer - Frontend",
    company: "United Overseas Bank Limited",
    duration: "July 2022 – April 2025",
    location: "Singapore",
    highlights: [
      "Led Micro Frontend Architecture initiatives for cross-border banking workflows.",
      "Built scalable transaction flows and reusable frontend modules for investment banking platforms.",
    ],
    technologies: ["ReactJS", "Redux", "TypeScript", "SCSS", "Git", "CI/CD"],
  },
  {
    role: "Senior Software Engineer - Frontend",
    company: "BYJU'S",
    duration: "December 2020 – July 2022",
    location: "Remote, India",
    highlights: [
      "Developed frontend features for BYJU'S live learning platform used by thousands of students.",
      "Mentored junior engineers and improved frontend performance and scalability.",
    ],
    technologies: [
      "ReactJS",
      "JavaScript",
      "SCSS",
      "Material UI",
      "Agora RTC/RTM",
      "Git",
    ],
  },
  {
    role: "Front End Engineer",
    company: "ZOHO Corporation",
    duration: "June 2017 – November 2020",
    location: "Chennai, India",
    highlights: [
      "Developed frontend tooling and CI/CD platforms supporting multiple Zoho products.",
      "Improved deployment and testing workflows for Zoho Books.",
    ],
    technologies: ["EmberJS", "VueJS", "Node.js", "SCSS", "Tailwind", "Git"],
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

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  impact?: string;
  github?: string;
  live?: string;
  links?: { label: string; href: string }[];
  date?: string;
}

export const projects: Project[] = [
  {
    title: 'lint-prepush',
    description:
      'A popular Node.js CLI tool for running linters on committed files. Ensures code quality before pushes.',
    techStack: ['Node.js', 'npm', 'CLI'],
    impact: '2.3M+ downloads on npm',
    links: [
      { label: 'NPM', href: 'https://www.npmjs.com/package/lint-prepush' },
      { label: 'GitHub', href: 'https://github.com/theenadayalank/lint-prepush' },
    ],
    date: '2018',
  },
  {
    title: 'YouTabMan',
    description:
      'A Chrome and Firefox extension to manage YouTube videos. Features include play, pause, replay, and loop across multiple tabs.',
    techStack: ['Chrome Extension', 'Firefox Add-on', 'JavaScript'],
    impact: 'Top 5 in Firefox Quantum Extensions Challenge (Mozilla)',
    links: [
      { label: 'Chrome', href: 'https://chrome.google.com/webstore/detail/youtabman/pfflnpdlbjjkgnelipgknanbnjafijgi' },
      { label: 'Firefox', href: 'https://addons.mozilla.org/en-US/firefox/addon/youtabman/' },
    ],
    date: '2018',
  },
  {
    title: 'react-otpify',
    description:
      'A customizable and accessible React component for handling OTP (One-Time Password) input.',
    techStack: ['React', 'TypeScript'],
    github: 'https://github.com/theenadayalank/react-otpify',
    date: '2022',
  },
  {
    title: 'Website',
    description: 'Source code of this portfolio site.',
    techStack: ['Next.js', 'React', 'Tailwind'],
    github: 'https://github.com/theenadayalank/website',
    date: '2025',
  },
];

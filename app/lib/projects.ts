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
      'Node.js CLI tool that lints only the committed branch files before a push, keeping CI pipelines clean.',
    techStack: ['Node.js', 'CLI', 'npm'],
    impact: '2.3M+ downloads on npm',
    links: [
      { label: 'GitHub', href: 'https://github.com/theenadayalank/lint-prepush' },
      { label: 'npm', href: 'https://www.npmjs.com/package/lint-prepush' },
    ],
    date: '2018',
  },
  {
    title: 'YouTabMan',
    description:
      'Browser extension that manages all open YouTube tabs from a single popup with playback controls.',
    techStack: ['JavaScript', 'Chrome Extension', 'Firefox Add-on'],
    impact: 'Top 5 in Mozilla Firefox Quantum Extensions Challenge 2018',
    links: [
      { label: 'GitHub', href: 'https://github.com/theenadayalank/YouTabMan' },
      { label: 'Chrome', href: 'https://chrome.google.com/webstore/detail/youtabman/pfflnpdlbjjkgnelipgknanbnjafijgi' },
      { label: 'Firefox', href: 'https://addons.mozilla.org/en-US/firefox/addon/youtabman/' },
    ],
    date: '2018',
  },
  {
    title: 'react-otpify',
    description:
      'Accessible React OTP input component library built for production authentication flows.',
    techStack: ['React', 'TypeScript', 'npm'],
    links: [
      { label: 'GitHub', href: 'https://github.com/theenadayalank/react-otpify' },
      { label: 'npm', href: 'https://www.npmjs.com/package/react-otpify' },
    ],
    date: '2022',
  },
  {
    title: 'Website',
    description: 'Source code of this portfolio site.',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    github: 'https://github.com/theenadayalank/website',
    date: '2025',
  },
];

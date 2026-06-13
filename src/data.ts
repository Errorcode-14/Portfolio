// All placeholder content lives here. Replace the bracketed values with your own.

export const ROLES = [
  'Cybersecurity Specialist',
  'Ethical Hacker',
  'Penetration Tester',
  'Cloud Security Engineer',
  'CTF Player',
];

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certs', label: 'Certs' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const FEATURES = [
  { icon: '\u{1F50D}', title: 'Offensive Security', desc: 'Penetration testing across web, network, and cloud' },
  { icon: '\u{1F6E1}\uFE0F', title: 'Defensive Thinking', desc: 'Blue team skills: SIEM, log analysis, threat detection' },
  { icon: '\u2601\uFE0F', title: 'Cloud Security', desc: 'AWS security configs, IAM, and hardening practices' },
  { icon: '\u{1F916}', title: 'AI-Powered Tools', desc: 'Building security automation with LLMs and Python' },
  { icon: '\u{1F3C6}', title: 'CTF Player', desc: 'Active competitive hacker sharpening real-world skills' },
  { icon: '\u{1F465}', title: 'Leadership', desc: 'Founded and led cybersecurity clubs and communities' },
];

export const STATS = [
  { value: '2+', label: 'Certifications' },
  { value: '2+', label: 'Years Experience' },
  { value: '7+', label: 'Projects' },
  { value: '4', label: 'Leadership Roles' },
];

export const EDUCATION = [
  { school: '[UNIVERSITY NAME]', degree: 'B.Tech / Degree', years: '[YEAR] - [YEAR]', score: 'GPA: [X.X]' },
  { school: '[JUNIOR COLLEGE NAME]', degree: 'Intermediate', years: '[YEAR] - [YEAR]', score: 'Score: [XX%]' },
  { school: '[HIGH SCHOOL NAME]', degree: 'Secondary', years: '[YEAR] - [YEAR]', score: 'GPA: [X.X]' },
];

export const EXPERIENCE = {
  company: '[COMPANY NAME]',
  role: '[YOUR ROLE]',
  duration: '[YEAR] - Present',
  workType: 'Hybrid',
  department: 'Security',
  bullets: [
    '[Responsibility / achievement placeholder one]',
    '[Responsibility / achievement placeholder two]',
    '[Responsibility / achievement placeholder three]',
  ],
};

export const PROJECT_CATEGORIES = [
  'All',
  'Red Teaming',
  'Blue Teaming',
  'AI Automation',
  'Vibe Coding',
  'Cloud & DevOps',
];

export interface Project {
  title: string;
  desc: string;
  category: string;
  status: 'Completed' | 'In-progress';
  stack: string[];
  overview?: string;
  code?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  { title: '[PROJECT TITLE]', desc: '[PROJECT DESCRIPTION]', category: 'Red Teaming', status: 'Completed', stack: ['[Tool 1]', '[Tool 2]'], overview: '#', code: '#', demo: '#' },
  { title: '[PROJECT TITLE]', desc: '[PROJECT DESCRIPTION]', category: 'Blue Teaming', status: 'Completed', stack: ['[Tool 1]', '[Tool 2]'], overview: '#', code: '#' },
  { title: '[PROJECT TITLE]', desc: '[PROJECT DESCRIPTION]', category: 'AI Automation', status: 'In-progress', stack: ['[Tool 1]', '[Tool 2]'], code: '#', demo: '#' },
  { title: '[PROJECT TITLE]', desc: '[PROJECT DESCRIPTION]', category: 'Vibe Coding', status: 'Completed', stack: ['[Tool 1]', '[Tool 2]'], overview: '#', demo: '#' },
  { title: '[PROJECT TITLE]', desc: '[PROJECT DESCRIPTION]', category: 'Cloud & DevOps', status: 'Completed', stack: ['[Tool 1]', '[Tool 2]'], overview: '#', code: '#' },
  { title: '[PROJECT TITLE]', desc: '[PROJECT DESCRIPTION]', category: 'Red Teaming', status: 'In-progress', stack: ['[Tool 1]', '[Tool 2]'], code: '#' },
];

export const IN_DEVELOPMENT = [
  { title: '[PROJECT TITLE]', category: 'AI Automation', desc: '[PROJECT DESCRIPTION]', progress: 60, stage: 'Testing' },
  { title: '[PROJECT TITLE]', category: 'Red Teaming', desc: '[PROJECT DESCRIPTION]', progress: 10, stage: 'Planning' },
];

export const SKILL_GROUPS = [
  {
    name: 'Offensive Security & Pentesting',
    subgroups: [
      { name: 'Recon & Enumeration', tools: ['[Tool 1]', '[Tool 2]', '[Tool 3]'] },
      { name: 'Vulnerability Scanning & Exploitation', tools: ['[Tool 1]', '[Tool 2]', '[Tool 3]'] },
      { name: 'Post-Exploitation & Reporting', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Red Team Basics', tools: ['[Tool 1]', '[Tool 2]'] },
    ],
  },
  {
    name: 'Defensive Security & Blue Teaming',
    subgroups: [
      { name: 'SIEM & Monitoring', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Log Analysis', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Threat Detection', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Response & Anomaly Detection', tools: ['[Tool 1]', '[Tool 2]'] },
    ],
  },
  {
    name: 'Scripting, Automation & Dev Tools',
    subgroups: [
      { name: 'Languages', tools: ['[Tool 1]', '[Tool 2]', '[Tool 3]'] },
      { name: 'Automation & APIs', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Version Control & Collaboration', tools: ['[Tool 1]', '[Tool 2]'] },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    subgroups: [
      { name: 'Cloud Platforms', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Web Hosting & Security', tools: ['[Tool 1]', '[Tool 2]'] },
      { name: 'Containers & DevOps Basics', tools: ['[Tool 1]', '[Tool 2]'] },
    ],
  },
];

export const TOOLS = {
  red: ['[Tool 1]', '[Tool 2]', '[Tool 3]', '[Tool 4]', '[Tool 5]'],
  blue: ['[Tool 1]', '[Tool 2]', '[Tool 3]', '[Tool 4]', '[Tool 5]'],
};

export const CERTS = [
  { name: '[CERT NAME]', issuer: '[ISSUER]', status: 'Verified' },
  { name: '[CERT NAME]', issuer: '[ISSUER]', status: 'Verified' },
  { name: '[CERT NAME]', issuer: '[ISSUER]', status: 'Pursuing' },
  { name: '[CERT NAME]', issuer: '[ISSUER]', status: 'Pursuing' },
  { name: '[CERT NAME]', issuer: '[ISSUER]', status: 'Verified' },
  { name: '[CERT NAME]', issuer: '[ISSUER]', status: 'Pursuing' },
];

export const BLOGS = [
  { title: '[BLOG TITLE]', category: 'cybersecurity', excerpt: '[Short excerpt placeholder]', date: '[DATE]', read: '[X] min read', url: '#' },
  { title: '[BLOG TITLE]', category: 'pentesting', excerpt: '[Short excerpt placeholder]', date: '[DATE]', read: '[X] min read', url: '#' },
  { title: '[BLOG TITLE]', category: 'cloud', excerpt: '[Short excerpt placeholder]', date: '[DATE]', read: '[X] min read', url: '#' },
  { title: '[BLOG TITLE]', category: 'ctf', excerpt: '[Short excerpt placeholder]', date: '[DATE]', read: '[X] min read', url: '#' },
  { title: '[BLOG TITLE]', category: 'osint', excerpt: '[Short excerpt placeholder]', date: '[DATE]', read: '[X] min read', url: '#' },
  { title: '[BLOG TITLE]', category: 'automation', excerpt: '[Short excerpt placeholder]', date: '[DATE]', read: '[X] min read', url: '#' },
];

export const CONTACT = {
  email: '[YOUR EMAIL]',
  github: '[YOUR GITHUB]',
  linkedin: '[YOUR LINKEDIN]',
  phone: '[YOUR PHONE]',
};

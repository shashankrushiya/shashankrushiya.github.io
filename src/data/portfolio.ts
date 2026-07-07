import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Code2,
  Cloud,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Layers3,
  Mail,
  MessageSquare,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type HighlightCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SkillGroup = {
  category: string;
  summary: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlight: string;
  bullets: string[];
};

export type MetricItem = {
  value: string;
  label: string;
};

export type ContactLink = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export const site = {
  name: "Shashank Rushiya",
  role: "Software Development Engineer in Test",
  location: "Bengaluru, India",
  email: "shashankrushiya@gmail.com",
  github: "https://github.com/shashankrushiya",
  linkedin: "https://www.linkedin.com/in/rushiyashashank",
  resumePath: "/resume.pdf",
  summary:
    "SDET with 3 years of experience building Python-based automation frameworks, defining end-to-end test strategy, and improving release confidence across UI, API, integration, and mobile testing.",
  availability:
    "Open to SDET, QA Automation, and quality engineering roles that need strong automation ownership and practical release discipline.",
};

export const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Overview" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const heroStats: MetricItem[] = [
  { value: "2+", label: "years in SDET" },
  { value: "40% → 75%", label: "automation coverage" },
  { value: "35%", label: "faster regression cycles" },
  { value: "5", label: "QA team members mentored" },
];

export const heroTags = [
  "Python",
  "Playwright",
  "Selenium",
  "Pytest",
  "OpenAI API",
  "Jenkins",
  "JIRA",
];

export const highlights: HighlightCard[] = [
  {
    title: "Own the release path",
    description:
      "Requirements review, test planning, automation execution, defect triage, and release sign-off in Agile teams.",
    icon: ShieldCheck,
  },
  {
    title: "Build useful automation",
    description:
      "Python, Playwright, Selenium, Pytest, BDD, REST API automation, and POM-based frameworks for real products.",
    icon: Code2,
  },
  {
    title: "Use AI with intent",
    description:
      "Integrated OpenAI API for test generation and reporting to reduce manual authoring and broaden edge-case coverage.",
    icon: BrainCircuit,
  },
  {
    title: "Improve delivery flow",
    description:
      "Reduced cycle time, tightened CI/CD loops, and mentored QA engineers to make releases more predictable.",
    icon: Workflow,
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages & Data",
    summary: "The daily stack I use to build automation and debug real problems.",
    items: ["Python", "JavaScript / TypeScript", "SQL", "PostgreSQL"],
  },
  {
    category: "Automation Stack",
    summary: "Hands-on frameworks and test layers used across product flows.",
    items: [
      "Playwright",
      "Selenium",
      "Pytest",
      "BDD (Cucumber)",
      "Page Object Model",
      "REST API Automation",
      "UI Automation",
      "Mobile Testing",
    ],
  },
  {
    category: "QA Practice",
    summary: "How I structure quality work from the start of a sprint to sign-off.",
    items: [
      "End-to-End Testing",
      "System Integration Testing",
      "Functional Testing",
      "Manual Testing",
      "Test Planning",
      "Test Case Design",
      "Defect Triage",
      "Root Cause Analysis",
      "Release Certification",
    ],
  },
  {
    category: "AI & Delivery Tools",
    summary: "The tooling layer around the framework and the team workflow.",
    items: [
      "OpenAI API",
      "AI-Driven Test Generation",
      "JIRA",
      "TestRail",
      "Confluence",
      "Postman",
      "Git",
      "Bitbucket",
      "Jenkins",
      "Linux",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Vaaree",
    role: "Software Development Engineer in Test",
    duration: "Dec 2024 - Present",
    location: "Bengaluru, India",
    highlight: "40% → 75% coverage and 35% faster regression cycles",
    bullets: [
      "Architected Python, Playwright, and Selenium automation frameworks to scale automated coverage and shorten regression cycles.",
      "Defined test strategy across UI, API, and system integration layers while reviewing requirements and code for quality risks early in the sprint.",
      "Integrated OpenAI API into an internal QA platform for test generation and automated reporting, reducing manual authoring effort.",
      "Conducted mobile testing, managed JIRA and TestRail workflows, and integrated automated suites into Jenkins CI/CD pipelines.",
      "Mentored a 5-person QA team and aligned engineering, product, and QA around clear release standards.",
    ],
  },
  {
    company: "Synechron",
    role: "Associate Engineer - Automation",
    duration: "Oct 2024 - Dec 2024",
    location: "Bengaluru, India",
    highlight: "Short 3-month automation stint with meaningful impact on financial workflows",
    bullets: [
      "In a focused 3-month tenure, built and executed automated suites for web, REST API, and system integration testing using Python, Selenium, BDD, and Pytest.",
      "Produced test plans, test conditions, and data sets for critical financial workflows, then drove root cause analysis on production failures.",
      "Optimized the framework to reduce flakiness and improve execution speed so the team got reliable feedback quickly within a short engagement.",
    ],
  },
  {
    company: "TestYantra Softwares Pvt Ltd",
    role: "Software Engineer in Test",
    duration: "Jul 2023 - Aug 2024",
    location: "Bengaluru, India",
    highlight: "20% lower cycle time, 30% less manual effort, 15% better API reliability",
    bullets: [
      "Built a scalable test automation framework for a distributed loan processing system using Python and SQL.",
      "Engineered REST API automation and systematic validation to improve service reliability and failure triage.",
      "Managed defects and sprint delivery using JIRA, and strengthened CI/CD workflow consistency through Jenkins, Bitbucket, and Confluence.",
    ],
  },
];

export const impactMetrics: MetricItem[] = [
  { value: "40% → 75%", label: "automation coverage at Vaaree" },
  { value: "35%", label: "faster regression cycle time" },
  { value: "30%", label: "manual testing reduction" },
  { value: "15%", label: "API reliability improvement" },
  { value: "25%", label: "better delivery adherence" },
  { value: "5", label: "QA engineers mentored" },
];

export const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shashankrushiya",
    href: site.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rushiyashashank",
    href: site.linkedin,
  },
  {
    icon: MessageSquare,
    label: "Resume",
    value: "Download the latest PDF",
    href: site.resumePath,
  },
];

export const education = {
  degree: "Master of Science",
  institution: "Nagpur University",
  years: "2018 - 2020",
  icon: GraduationCap,
};

export const focusAreas = [
  "STLC ownership",
  "Release sign-off",
  "AI-assisted QA",
  "Cross-functional collaboration",
  "Mentoring",
];

export const stackHighlights = [
  {
    title: "Python automation",
    icon: Code2,
  },
  {
    title: "API testing",
    icon: ServerCog,
  },
  {
    title: "Data validation",
    icon: Database,
  },
  {
    title: "Cloud delivery",
    icon: Cloud,
  },
  {
    title: "Workflow design",
    icon: Workflow,
  },
  {
    title: "System integration",
    icon: Layers3,
  },
];

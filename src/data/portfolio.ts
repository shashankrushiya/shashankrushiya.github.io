import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export type NavItem = { href: string; label: string };

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

export type MetricItem = { value: string; label: string };

export type ContactLink = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export type BuiltTool = {
  name: string;
  description: string;
  input: string;
  output: string;
  ownership: string;
  impact: string;
  tags: string[];
  caseStudyHref: string;
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
  { href: "#philosophy", label: "Approach" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const heroStats: MetricItem[] = [
  { value: "3", label: "years in SDET" },
  { value: "40% → 75%", label: "automation coverage" },
  { value: "35%", label: "faster regression cycles" },
  { value: "5", label: "QA team members mentored" },
];

export const heroTags = ["Python", "Playwright", "Selenium", "Pytest", "OpenAI API", "Jenkins", "JIRA"];

export const skills: SkillGroup[] = [
  { category: "Languages & Data", summary: "The daily stack I use to build automation and debug real problems.", items: ["Python", "JavaScript / TypeScript", "SQL", "PostgreSQL"] },
  { category: "Automation Stack", summary: "Hands-on frameworks and test layers used across product flows.", items: ["Playwright", "Selenium", "Pytest", "BDD (Cucumber)", "Page Object Model", "REST API Automation", "UI Automation", "Mobile Testing"] },
  { category: "QA Practice", summary: "How I structure quality work from the start of a sprint to sign-off.", items: ["End-to-End Testing", "System Integration Testing", "Functional Testing", "Manual Testing", "Test Planning", "Test Case Design", "Defect Triage", "Root Cause Analysis", "Release Certification"] },
  { category: "AI & Delivery Tools", summary: "The tooling layer around the framework and the team workflow.", items: ["OpenAI API", "AI-Driven Test Generation", "JIRA", "TestRail", "Confluence", "Postman", "Git", "Bitbucket", "Jenkins", "Linux"] },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Vaaree", role: "Software Development Engineer in Test", duration: "Dec 2024 - Present", location: "Bengaluru, India", highlight: "40% → 75% coverage and 35% faster regression cycles",
    bullets: [
      "Architected Python, Playwright, and Selenium automation frameworks to scale automated coverage and shorten regression cycles.",
      "Defined test strategy across UI, API, and system integration layers while reviewing requirements and code for quality risks early in the sprint.",
      "Built Test Case Builder, an internal web app using the OpenAI API that turns PRDs into test scenarios directly from a Confluence link or upload.",
      "Conducted mobile testing, managed JIRA and TestRail workflows, and integrated automated suites into Jenkins CI/CD pipelines.",
      "Mentored a 5-person QA team and aligned engineering, product, and QA around clear release standards.",
    ],
  },
  {
    company: "Synechron", role: "Associate Engineer - Automation", duration: "Oct 2024 - Dec 2024", location: "Bengaluru, India", highlight: "Short 3-month automation stint with meaningful impact on financial workflows",
    bullets: [
      "In a focused 3-month tenure, built and executed automated suites for web, REST API, and system integration testing using Python, Selenium, BDD, and Pytest.",
      "Produced test plans, test conditions, and data sets for critical financial workflows, then drove root cause analysis on production failures.",
      "Optimized the framework to reduce flakiness and improve execution speed so the team got reliable feedback quickly within a short engagement.",
    ],
  },
  {
    company: "TestYantra Softwares Pvt Ltd", role: "Software Engineer in Test", duration: "Jul 2023 - Aug 2024", location: "Bengaluru, India", highlight: "20% lower cycle time, 30% less manual effort, 15% better API reliability",
    bullets: [
      "Built a scalable test automation framework for a distributed loan processing system using Python and SQL.",
      "Engineered REST API automation and systematic validation to improve service reliability and failure triage.",
      "Managed defects and sprint delivery using JIRA, and strengthened CI/CD workflow consistency through Jenkins, Bitbucket, and Confluence.",
    ],
  },
];

export const builtTools: BuiltTool[] = [{
  name: "Test Case Builder",
  description: "An internal web app built for the QA team that turns PRDs into structured test scenarios using the OpenAI API.",
  input: "A Confluence document link or an uploaded PRD file.",
  output: "A set of test scenarios the team can refine and use directly.",
  ownership: "Built solo.", impact: "30–40%", tags: ["OpenAI API", "Internal Web App"], caseStudyHref: "#vaaree-case-study",
}];

export const impactMetrics: MetricItem[] = [
  { value: "40% → 75%", label: "automation coverage at Vaaree" }, { value: "35%", label: "faster regression cycle time" }, { value: "30%", label: "manual testing reduction" }, { value: "15%", label: "API reliability improvement" }, { value: "25%", label: "better delivery adherence" }, { value: "5", label: "QA engineers mentored" },
];

export const contactLinks: ContactLink[] = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Github, label: "GitHub", value: "github.com/shashankrushiya", href: site.github },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rushiyashashank", href: site.linkedin },
  { icon: MessageSquare, label: "Resume", value: "Download the latest PDF", href: site.resumePath },
];

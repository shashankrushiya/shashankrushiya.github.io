"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  education,
  experiences,
  heroStats,
  highlights,
  impactMetrics,
  skills,
  site,
} from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const sectionHeader =
  "relative max-w-3xl space-y-4 before:absolute before:-left-4 before:top-2 before:h-10 before:w-1 before:rounded-full before:content-[''] before:bg-[linear-gradient(180deg,#111827,#2563eb)]";

const processSteps = [
  {
    step: "01",
    title: "Review requirements early",
    text: "I validate scope, edge cases, and testability before the sprint locks in, so quality is designed in instead of bolted on.",
    icon: ShieldCheck,
  },
  {
    step: "02",
    title: "Automate the critical path",
    text: "I build useful coverage across UI, API, and integration layers using Python, Playwright, Selenium, Pytest, and BDD.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Tie tests to delivery",
    text: "Automated checks flow through Jenkins and release routines, so the team gets faster signal and fewer surprises.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Measure and improve",
    text: "Coverage, cycle time, flakiness, and defect leakage stay visible so the framework keeps getting better over time.",
    icon: Layers3,
  },
];

export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f3f4f6_35%,#fffdf8_100%)] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-white/40 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.28em] text-slate-900 uppercase">
            Shashank Rushiya
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {["About", "Impact", "Experience", "Toolkit", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-600 transition-colors hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute right-[-6rem] top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  SDET / Automation Test Engineer
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  <MapPin size={14} />
                  {site.location}
                </span>
                
              </div>

              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300/70">Professional Hybrid</p>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  I build automation that helps teams ship with confidence.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/72">
                  {site.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={site.resumePath}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Download Resume
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Mail size={16} />
                  Contact
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl"
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Playwright", "Selenium", "Pytest", "OpenAI API", "Jenkins", "JIRA"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.aside
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">At a glance</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Outcome-focused QA engineering</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                  Open to roles
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Owns test strategy from planning to release sign-off",
                  "Strong in UI, API, integration, and mobile testing",
                  "Uses AI tools with intent, not decoration",
                  "Improves coverage, cycle time, and reliability",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 text-sky-300" />
                    <span className="text-sm leading-6 text-white/75">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">Current focus</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Automation coverage", "Quality signals", "Release confidence", "Team mentoring"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className={sectionHeader}>
            <p className="text-xs uppercase tracking-[0.35em] text-sky-700/70">Overview</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Smooth presentation. Real signals. No fake dashboard noise.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              This layout leans editorial and smooth, while still surfacing the proof recruiters look for: ownership, tools, outcomes, and role clarity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                  <item.icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                <GraduationCap size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">Education</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {education.degree} at {education.institution} ({education.years})
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                <Code2 size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">Primary stack</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Python, Playwright, Selenium, Pytest, REST API automation, SQL, and Jenkins.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                <BrainCircuit size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">AI with intent</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                OpenAI-assisted test generation and reporting to reduce manual effort and improve coverage quality.
              </p>
            </div>
          </div>
        </section>

        <section id="impact" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={sectionHeader}>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Impact</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Measurable outcomes from the resume, presented simply.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                These cards keep the numbers visible without turning the page into a data board.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {impactMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="text-3xl font-semibold text-slate-950">{metric.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={sectionHeader}>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Experience</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A clean, chronological story of ownership.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Each role focuses on what changed, what you owned, and where the measurable improvement came from.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="grid gap-4 rounded-[1.75rem] border border-white bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.07)] lg:grid-cols-[260px_1fr]"
                >
                  <div className="space-y-3">
                    <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-700">
                      <BadgeCheck size={18} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-950">{experience.role}</h3>
                    <p className="text-sm font-medium text-slate-600">{experience.company}</p>
                    <div className="space-y-2 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <CalendarDays size={14} />
                        {experience.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {experience.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-t border-slate-100 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Impact snapshot</p>
                    <h4 className="text-xl font-semibold text-slate-950">{experience.highlight}</h4>
                    <ul className="space-y-3">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
                          <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="toolkit" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className={sectionHeader}>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Toolkit</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The stack is focused, not overloaded.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Compact skill groups work better here than huge walls of chips. It keeps the page smooth and readable.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{group.category}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{group.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Python automation",
                "Playwright + Selenium",
                "OpenAI-assisted QA",
                "Jenkins and delivery flow",
                "Mobile and API testing",
                "STLC ownership",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={sectionHeader}>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/70">How I work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Simple process. Strong signal. Minimal noise.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/68">
                This section keeps the page informative without becoming dense or dashboard-like.
              </p>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-200">
                      <step.icon size={18} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.35em] text-white/40">{step.step}</div>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[linear-gradient(180deg,#0f172a_0%,#020617_100%)] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/70">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                If the role needs strong automation ownership, let’s talk.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                {site.availability}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="grid gap-3">
                {[
                  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
                  { label: "GitHub", value: "github.com/shashankrushiya", href: site.github, icon: Github },
                  { label: "LinkedIn", value: "linkedin.com/in/rushiyashashank", href: site.linkedin, icon: Linkedin },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4 transition-colors hover:bg-white/10"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sky-200">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-white/45">{item.label}</div>
                      <div className="text-sm text-white/85">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.resumePath}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Download Resume
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  <Mail size={16} />
                  Start conversation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-white/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Shashank Rushiya. All rights reserved.</p>
          <p>Built to keep the story clear, concise, and easy to follow.</p>
        </div>
      </footer>
    </div>
  );
}

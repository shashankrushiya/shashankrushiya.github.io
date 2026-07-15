import { ArrowDownRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { builtTools, contactLinks, experiences, heroStats, heroTags, impactMetrics, navItems, site, skills } from "@/data/portfolio";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="font-mono text-xs font-medium tracking-[0.18em] text-muted"><span className="mr-3 text-verified">{number}</span>{children}</p>;
}

const caseStudyCopy = [
  { title: "Cutting regression time by building a real automation framework.", problem: "Release confidence depended on slow, inconsistent manual regression across UI, API, and integration layers.", result: "Automation coverage grew from 40% to 75% and regression cycles ran 35% faster, while mentoring a 5-person QA team on the new standard." },
  { title: "Stabilizing automation for financial workflows in a 3-month engagement.", problem: "Financial workflow testing needed reliable automated coverage fast, with production failures triaged largely by hand.", result: "Delivered a working, lower-flake automation layer for financial workflows within a focused 3-month tenure." },
  { title: "Scaling automated coverage for a distributed loan processing system.", problem: "A distributed loan processing system needed systematic API and data validation to catch reliability issues earlier.", result: "Cycle time dropped 20%, manual testing effort dropped 30%, and API reliability improved 15%." },
];

export default function PortfolioHome() {
  return (
    <div className="bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#home" className="font-display text-lg font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verified">SR<span className="text-verified">.</span></a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verified">{item.label}</a>)}
          </nav>
          <a href="#contact" className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ink underline decoration-verified decoration-2 underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verified">Let&apos;s talk</a>
        </div>
      </header>

      <main>
        <section id="home" className="border-b border-line">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-7 flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="inline-flex items-center gap-2 rounded-full bg-verified-bg px-3 py-1.5 font-medium text-verified"><span className="h-1.5 w-1.5 rounded-full bg-verified" />Available for opportunities</span>
                <span className="text-muted">{site.location}</span>
              </div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">SDET / Quality Engineering</p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[.96] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">{site.name}<span className="text-verified">.</span></h1>
              <p className="mt-6 font-display text-2xl font-medium tracking-tight text-ink-soft sm:text-3xl">{site.role}</p>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-soft">{site.summary}</p>
              <div className="mt-9 flex flex-wrap gap-2">{heroTags.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-soft">{tag}</span>)}</div>
            </div>
            <aside aria-label="Selected quality metrics" className="self-center border border-dark-line bg-dark text-paper shadow-[8px_8px_0_#DFD7C6]">
              <div className="flex items-center gap-2 border-b border-dark-line px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-[#D45B55]" /><span className="h-2.5 w-2.5 rounded-full bg-amber" /><span className="h-2.5 w-2.5 rounded-full bg-verified" /><span className="ml-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted-light">release_quality.log</span></div>
              <div className="grid grid-cols-2">{heroStats.map((stat, index) => <div key={stat.label} className={`p-5 sm:p-6 ${index % 2 ? "border-l border-dark-line" : ""} ${index > 1 ? "border-t border-dark-line" : ""}`}><p className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">{stat.value}</p><p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-muted-light">{stat.label}</p></div>)}</div>
              <p className="border-t border-dark-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-verified">status: passing</p>
            </aside>
          </div>
        </section>

        <section id="philosophy" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <SectionLabel number="01">TESTING PHILOSOPHY</SectionLabel>
          <div className="mt-8 grid gap-10 lg:grid-cols-[.78fr_1.22fr]">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.045em] sm:text-5xl">Quality is a release decision, not a QA checkbox.</h2>
            <div className="space-y-6 text-lg leading-8 text-ink-soft"><p>I review requirements and code early enough to catch testability and edge-case gaps before a sprint closes, not after a build breaks in staging.</p><p>Automation only earns its place if it covers the critical path across UI, API, and integration layers, and runs fast enough that engineers actually trust the result. I build that layer with Python, Playwright, Selenium, and Pytest, and reach for the OpenAI API where it genuinely reduces manual authoring effort.</p><p>The job doesn&apos;t end at a green checkmark. I track coverage, cycle time, flaky-test rate, and defect leakage, and treat a rising flake rate as seriously as a failing suite.</p></div>
          </div>
        </section>

        <section id="stack" className="border-y border-line bg-paper-panel py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionLabel number="02">TECH STACK</SectionLabel><div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><h2 className="font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Tools, organized by the work they support.</h2><p className="max-w-sm text-sm leading-6 text-ink-soft">A practical stack across test authoring, delivery, and quality operations.</p></div>
            <div className="mt-12 grid border-l border-t border-line sm:grid-cols-2">{skills.map((group) => <article key={group.category} className="border-b border-r border-line p-6 sm:p-8"><h3 className="font-display text-xl font-bold tracking-tight">{group.category}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-ink-soft">{group.summary}</p><ul className="mt-6 flex flex-wrap gap-2">{group.items.map((item) => <li key={item} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-soft">{item}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><SectionLabel number="03">SELECTED WORK</SectionLabel><div className="mt-8 max-w-3xl"><h2 className="font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Automation as an operating standard.</h2></div>
          <div className="mt-12 space-y-12">{experiences.map((experience, index) => { const study = caseStudyCopy[index]; return <article id={index === 0 ? "vaaree-case-study" : undefined} key={experience.company} className="grid gap-7 border-t border-line pt-6 lg:grid-cols-[.55fr_1.45fr]"><div><p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted">0{index + 1} / {experience.company}</p><h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">{study.title}</h3></div><div className="grid gap-6 md:grid-cols-3"><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-amber">Problem</p><p className="mt-3 text-sm leading-6 text-ink-soft">{study.problem}</p></div><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Approach</p><ul className="mt-3 space-y-3">{experience.bullets.map((bullet) => <li key={bullet} className="text-sm leading-6 text-ink-soft before:mr-2 before:text-verified before:content-['→']">{bullet}</li>)}</ul>{index === 0 && <a href="#tools" className="mt-4 inline-flex items-center gap-1 font-mono text-xs font-medium text-verified underline underline-offset-4">Test Case Builder <ArrowDownRight size={14} /></a>}</div><div className="border-l-2 border-verified pl-4"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-verified">Result</p><p className="mt-3 text-sm font-medium leading-6 text-ink">{study.result}</p></div></div></article>})}</div>
        </section>

        <section id="tools" className="border-y border-line bg-paper-panel py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionLabel number="04">TOOLS I&apos;VE BUILT</SectionLabel>{builtTools.map((tool) => <article key={tool.name} className="mt-8 grid gap-8 border border-ink bg-paper p-6 sm:p-10 lg:grid-cols-[1.2fr_.8fr]"><div><p className="font-mono text-xs uppercase tracking-[0.15em] text-verified">Shipped tool / built solo</p><h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.045em]">{tool.name}</h2><p className="mt-5 max-w-xl text-lg leading-8 text-ink-soft">{tool.description}</p><dl className="mt-7 grid gap-5 sm:grid-cols-2"><div><dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Input</dt><dd className="mt-2 text-sm leading-6 text-ink-soft">{tool.input}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Output</dt><dd className="mt-2 text-sm leading-6 text-ink-soft">{tool.output}</dd></div></dl><div className="mt-7 flex flex-wrap gap-2">{tool.tags.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink-soft">{tag}</span>)}</div></div><div className="flex flex-col justify-between border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"><div><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">Manual test-case writing</p><p className="mt-3 font-display text-6xl font-bold tracking-[-0.06em] text-verified">{tool.impact}</p><p className="mt-2 text-sm text-ink-soft">less effort for the QA team</p></div><a href={tool.caseStudyHref} className="mt-10 inline-flex items-center gap-2 font-mono text-xs font-medium text-ink underline decoration-verified decoration-2 underline-offset-4">View Vaaree case study <ArrowUpRight size={14} /></a></div></article>)}</div></section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><SectionLabel number="05">EXPERIENCE</SectionLabel><div className="mt-8 grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><h2 className="font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Work history, on the release line.</h2><div className="relative border-l border-line pl-8">{experiences.map((experience) => <article key={`${experience.company}-${experience.role}`} className="relative pb-12 last:pb-0 before:absolute before:-left-[37px] before:top-1 before:h-4 before:w-4 before:rounded-full before:border-4 before:border-paper before:bg-verified"><p className="font-mono text-xs text-muted">{experience.duration}</p><h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{experience.role}</h3><p className="mt-1 font-medium text-ink-soft">{experience.company}</p><p className="mt-3 flex items-center gap-2 font-mono text-xs text-muted"><MapPin size={13} />{experience.location}</p><p className="mt-4 max-w-xl text-sm leading-6 text-ink-soft">{experience.highlight}</p></article>)}</div></div></section>

        <section id="impact" className="bg-dark py-24 text-paper"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionLabel number="06">MEASURABLE IMPACT</SectionLabel><div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-2xl font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">The output is confidence—and evidence.</h2><p className="max-w-sm text-sm leading-6 text-muted-light">Metrics from automation, delivery, and team practice across recent roles.</p></div><div className="mt-12 grid gap-px bg-dark-line sm:grid-cols-2 lg:grid-cols-3">{impactMetrics.map((metric) => <div key={metric.label} className="bg-dark p-6 sm:p-8"><p className="font-display text-4xl font-bold tracking-[-0.05em] text-paper">{metric.value}</p><p className="mt-2 font-mono text-xs leading-5 text-muted-light">{metric.label}</p></div>)}</div></div></section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8"><SectionLabel number="07">CONTACT</SectionLabel><div className="mt-8 grid gap-10 border-t border-ink pt-8 lg:grid-cols-[1fr_1fr]"><div><h2 className="font-display text-4xl font-bold tracking-[-0.045em] sm:text-5xl">Open to quality work with real ownership.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">{site.availability}</p><a href={site.resumePath} className="mt-8 inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verified"><Download size={15} />Download resume</a></div><ul className="divide-y divide-line border-y border-line">{contactLinks.map((link) => { const Icon = link.icon; const external = link.href.startsWith("http"); return <li key={link.label}><a href={link.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-verified focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verified"><span className="flex items-center gap-4"><Icon size={18} /><span><span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{link.label}</span><span className="mt-1 block text-sm text-ink-soft">{link.value}</span></span></span><ArrowUpRight size={17} /></a></li>})}</ul></div></section>
      </main>
      <footer className="border-t border-line px-5 py-7 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:flex-row"><p>© {new Date().getFullYear()} {site.name}</p><p>Quality is a release decision.</p></div></footer>
    </div>
  );
}

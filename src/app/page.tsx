import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return <main>
    <section className="hero page-container">
      <p className="eyebrow hero-kicker"><span className="status-dot" />Available for thoughtful problems</p>
      <h1>I design experiences.<br /><em>I build products.</em></h1>
      <div className="hero-bottom"><p className="hero-copy">Product designer and web developer working at the intersection of user experience, engineering, and business.</p><Link className="text-link" href="/work">Explore selected work <ArrowDown size={16} /></Link></div>
    </section>
    <section className="section page-container" id="work"><div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2>Turning complexity<br />into clarity.</h2></div><p className="section-intro">A selection of work across product design, systems thinking, and front-end development.</p></div><div className="project-grid">{projects.slice(0, 3).map((project) => <ProjectCard project={project} key={project.slug} />)}</div><Link className="text-link section-link" href="/work">View all work <ArrowUpRight size={16} /></Link></section>
    <section className="statement-section"><div className="page-container statement"><p className="eyebrow">02 / Approach</p><p className="statement-copy">I work where <span>good design</span>, <span>clear systems</span>, and <span>useful technology</span> meet.</p><Link className="text-link" href="/about">More about me <MoveUpRight size={16} /></Link></div></section>
    <section className="section page-container capabilities"><div className="section-heading"><div><p className="eyebrow">03 / Capabilities</p><h2>Curious by default.<br />Precise by practice.</h2></div></div><div className="capability-grid"><div><span>01</span><h3>Product design</h3><p>Requirements gathering, user research, prioritization, roadmapping, and prototyping.</p></div><div><span>02</span><h3>Design systems</h3><p>Reusable Figma components and shared decisions that help teams move with consistency.</p></div><div><span>03</span><h3>Full-stack development</h3><p>HTML, CSS, Angular, TypeScript, Node.js, PostgreSQL, and Python.</p></div></div></section>
    <section className="contact-band"><div className="page-container contact-band-inner"><p className="eyebrow">Have a good problem?</p><h2>Let&apos;s make something<br /><em>useful.</em></h2><Link className="button-link" href="/contact">Get in touch <ArrowUpRight size={16} /></Link></div></section>
  </main>;
}

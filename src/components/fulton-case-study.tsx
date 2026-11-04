import { ArrowUpRight } from "lucide-react";
import { PlaceholderPanel } from "./placeholder-panel";

const workflow = [
  ["Submissions", "A clear starting point for collecting conference work."],
  ["Printing", "Operational tools for preparing materials for an event."],
  ["Judging", "Experiences for judges and lead judges to review work."],
  ["Awards", "A connected workflow for final decisions and recognition."],
];

export function FultonCaseStudy() {
  return <>
    <section className="case-hero page-container"><p className="eyebrow">Case study / 01</p><h1>Designing better workflows for complex conference operations.</h1><p className="case-hero-summary">Fulton Conference Management is a BYU platform transitioning from Mendix to Angular. The team used the transition as an opportunity to rethink the product experience from the ground up.</p><div className="case-meta-grid"><div><span>Role</span><strong>Lead UX/UI Designer</strong></div><div><span>Design scope</span><strong>38 screens across five workflows</strong></div><div><span>System</span><strong>102 reusable Figma component variants</strong></div></div></section>
    <section className="case-section page-container"><div className="case-section-heading"><p className="eyebrow">01 / Context</p><h2>One conference.<br />Many connected workflows.</h2></div><div className="case-two-column"><p>Faculty had expressed frustrations with confusing workflows, the judging process, and slow, problematic printing operations. My responsibility was to lead the design work and work with stakeholders toward a clearer experience.</p><p>The work was organized around one workflow at a time: define it collaboratively, design the solution, review it, incorporate feedback, finalize it, and move to the next workflow. Meetings occurred biweekly.</p></div></section>
    <section className="case-section case-section-elevated"><div className="page-container"><div className="case-section-heading"><p className="eyebrow">02 / The system</p><h2>One product,<br />four moments.</h2></div><div className="workflow-list">{workflow.map(([title, copy], index) => <div className="workflow-item" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={18} /></div>)}</div></div></section>
    <section className="case-section page-container"><div className="case-section-heading"><p className="eyebrow">03 / Selected interface</p><h2>A new foundation<br />for conference work.</h2></div><PlaceholderPanel label="Fulton interface export placeholder — original screens will be added when available" /></section>
    <section className="case-section case-section-elevated"><div className="page-container"><div className="case-section-heading"><p className="eyebrow">04 / Reflection</p><h2>Designing with<br />the people closest to the work.</h2></div><p className="case-reflection">The design process centered stakeholder collaboration and iteration. It balanced the needs of judges, lead judges, administrators, presenters, and the operational teams responsible for making a conference run.</p></div></section>
  </>;
}

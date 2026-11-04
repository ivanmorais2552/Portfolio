import { ProjectCard } from "@/components/project-card";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return <main><PageIntro label="01 / Selected work" title={<>Work shaped by<br /><em>real constraints.</em></>} description="A selection of product design, systems, and development work. Case studies will grow as more project material becomes available." /><section className="section page-container work-overview"><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section></main>;
}

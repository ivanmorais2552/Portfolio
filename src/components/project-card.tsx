import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className={`project-card project-card-${project.accent}`} href={`/work/${project.slug}`}>
      <div className="project-card-visual" aria-hidden="true">
        <div className="mock-window">
          <div className="mock-window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="mock-window-body">
            <div className="mock-sidebar" />
            <div className="mock-content">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        {project.featured && <span className="preview-label">Interactive preview soon</span>}
      </div>
      <div className="project-card-info">
        <div>
          <p className="eyebrow">{project.discipline}</p>
          <h3>{project.title}</h3>
          <p className="card-summary">{project.summary}</p>
        </div>
        <ArrowUpRight size={18} strokeWidth={1.6} />
      </div>
      <div className="project-card-meta">
        <span>{project.role}</span>
        <span>{project.year}</span>
      </div>
    </Link>
  );
}

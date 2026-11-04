import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/lib/projects';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className={styles.card} href={`/work/${project.slug}`}>
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.mockWindow}>
          <div className={styles.mockWindowBar}>
            <span />
            <span />
            <span />
          </div>
          <div className={styles.mockWindowBody}>
            <div className={styles.mockSidebar} />
            <div className={styles.mockContent}>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        {project.featured && <span className={styles.previewLabel}>Interactive preview soon</span>}
      </div>
      <div className={styles.info}>
        <div>
          <p className={utilityStyles.eyebrow}>{project.discipline}</p>
          <h3>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <ArrowUpRight size={18} strokeWidth={1.6} />
      </div>
      <div className={styles.meta}>
        <span>{project.role}</span>
        <span>{project.year}</span>
      </div>
    </Link>
  );
}

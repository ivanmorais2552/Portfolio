import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectImage } from '@/components/ui/ProjectImage';
import type { Project } from '@/features/work/data/projectCatalog';
import utilityStyles from '@/styles/Utility.module.css';
import hoverStyles from './ProjectHover.module.css';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className={`${styles.card} ${hoverStyles.interactive}`} href={`/work/${project.slug}`}>
      <div className={styles.visual} aria-hidden="true">
        {project.image ? (
          <ProjectImage
            className={`${styles.projectImage} ${hoverStyles.image}`}
            src={project.image}
            alt={project.imageAlt ?? `${project.title} project preview`}
            width={project.imageWidth ?? 3840}
            height={project.imageHeight ?? 2718}
            crop={project.imageCrop}
            sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1000px) 50vw, 33vw"
          />
        ) : (
          <div className={`${styles.mockWindow} ${hoverStyles.image}`}>
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
        )}
        {project.featured && <span className={styles.previewLabel}>Interactive preview soon</span>}
      </div>
      <div className={styles.info}>
        <div>
          <p className={utilityStyles.eyebrow}>{project.discipline}</p>
          <h3>{project.title}</h3>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <ArrowUpRight className={hoverStyles.ctaIcon} size={18} strokeWidth={1.6} />
      </div>
      <div className={styles.meta}>
        <span>{project.role}</span>
        <span>{project.year}</span>
      </div>
    </Link>
  );
}

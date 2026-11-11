import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectImage } from '@/components/ui/ProjectImage';
import layeredCoverStyles from '@/components/ui/LayeredProjectCover.module.css';
import { PersonalProjectsPreview } from '@/features/personal-projects/components/PersonalProjectsPreview';
import { DesignSystemPreview } from './DesignSystemPreview';
import type { Project } from '@/features/work/data/projectCatalog';
import utilityStyles from '@/styles/Utility.module.css';
import hoverStyles from './ProjectHover.module.css';
import { ResearchGrantsPreview } from './ResearchGrantsPreview';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
  variant?: 'work';
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const hasLayeredPreview =
    variant === 'work' &&
    (project.slug === 'personal-projects' || project.slug === 'research-grants');
  const isPersonalProjects = variant === 'work' && project.slug === 'personal-projects';
  const isDesignSystem = variant === 'work' && project.slug === 'byu-design-system';

  return (
    <Link
      className={`${styles.card} ${variant === 'work' ? styles.workCard : ''} ${isPersonalProjects ? styles.personalProjectsCard : ''} ${hoverStyles.interactive} ${hasLayeredPreview ? layeredCoverStyles.cover : ''}`}
      href={`/work/${project.slug}`}
    >
      <div className={styles.visual} aria-hidden="true">
        {variant === 'work' && project.slug === 'personal-projects' ? (
          <PersonalProjectsPreview />
        ) : variant === 'work' && project.slug === 'research-grants' ? (
          <ResearchGrantsPreview />
        ) : isDesignSystem ? (
          <DesignSystemPreview />
        ) : project.image ? (
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
          <p className={`${utilityStyles.eyebrow} ${styles.discipline}`}>{project.discipline}</p>
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

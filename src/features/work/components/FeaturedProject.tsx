import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectImage } from '@/components/ui/ProjectImage';
import type { Project } from '@/features/work/data/projectCatalog';
import utilityStyles from '@/styles/Utility.module.css';
import hoverStyles from './ProjectHover.module.css';
import styles from './FeaturedProject.module.css';

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project.image) return null;

  return (
    <Link className={`${styles.project} ${hoverStyles.interactive}`} href={`/work/${project.slug}`}>
      <div className={styles.visual}>
        <ProjectImage
          className={`${styles.imageFrame} ${hoverStyles.image}`}
          src={project.image}
          alt={project.imageAlt ?? `${project.title} project preview`}
          width={project.imageWidth ?? 3840}
          height={project.imageHeight ?? 2718}
          crop={project.imageCrop}
          sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1200px) 58vw, 700px"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <p className={utilityStyles.eyebrow}>Product Design / {project.year}</p>
          <h2>{project.title}</h2>
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <span className={styles.cta}>
          View Case Study{' '}
          <ArrowUpRight className={hoverStyles.ctaIcon} size={17} strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/features/work/data/projectCatalog';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './FeaturedProject.module.css';

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  if (!project.image) return null;

  return (
    <Link className={styles.project} href={`/work/${project.slug}`}>
      <div className={styles.visual}>
        <Image
          className={styles.image}
          src={project.image}
          alt={project.imageAlt ?? `${project.title} project preview`}
          width={3840}
          height={2718}
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
          View Case Study <ArrowUpRight size={17} strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}

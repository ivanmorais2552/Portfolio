import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from './data/projectCatalog';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './ProjectDetailPage.module.css';

type ProjectDetailPageProps = { project: Project };

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main>
      <section className={`${styles.hero} ${layoutStyles.pageContainer}`}>
        <p className={utilityStyles.eyebrow}>Upcoming case study</p>
        <h1>{project.title}</h1>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.metaGrid}>
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>Discipline</span>
            <strong>{project.discipline}</strong>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${layoutStyles.pageContainer}`}>
        <p>This case study is being prepared.</p>
        <Link className={utilityStyles.textLink} href="/work">
          Explore published work <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

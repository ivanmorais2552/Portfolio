import { notFound } from 'next/navigation';
import { FultonCaseStudy } from '@/components/fulton-case-study';
import { PlaceholderPanel } from '@/components/placeholder-panel';
import { projects } from '@/lib/projects';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import fultonStyles from '../../Fulton.module.css';
import styles from '../../ProjectDetail.module.css';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (project.slug === 'fulton') {
    return (
      <div className={fultonStyles.page}>
        <FultonCaseStudy />
      </div>
    );
  }
  return (
    <main>
      <section className={`${styles.hero} ${layoutStyles.pageContainer}`}>
        <p className={utilityStyles.eyebrow}>Case study / placeholder</p>
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
        <PlaceholderProject />
      </section>
    </main>
  );
}

function PlaceholderProject() {
  return (
    <PlaceholderPanel label="Additional project details and original assets will be added when available." />
  );
}

import { ProjectCard } from '@/components/project-card';
import { PageIntro } from '@/components/page-intro';
import { projects } from '@/lib/projects';
import layoutStyles from '@/styles/Layout.module.css';
import styles from '../Work.module.css';

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        label="01 / Selected work"
        title={
          <>
            Work shaped by
            <br />
            <em>real constraints.</em>
          </>
        }
        description="A selection of product design, systems, and development work. Case studies will grow as more project material becomes available."
      />
      <section className={`${styles.overview} ${layoutStyles.pageContainer}`}>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}

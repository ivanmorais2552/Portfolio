import { FeaturedProject } from '@/features/work/components/FeaturedProject';
import { PersonalProjectsPreview } from '@/features/personal-projects/components/PersonalProjectsPreview';
import { ProjectCard } from '@/features/work/components/ProjectCard';
import { PageIntro } from '@/components/ui/PageIntro';
import { projects } from '@/features/work/data/projectCatalog';
import layoutStyles from '@/styles/Layout.module.css';
import styles from './WorkPage.module.css';

export function WorkPage() {
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
        <FeaturedProject project={projects[0]} />
        <PersonalProjectsPreview />
        <div className={styles.projectGrid}>
          {projects.slice(1).map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}

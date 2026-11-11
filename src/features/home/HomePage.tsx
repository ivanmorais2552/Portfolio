import Link from 'next/link';
import { HomeHero } from './components/HomeHero';
import { HomeApproach } from './components/HomeApproach';
import { HomeContact } from './components/HomeContact';
import { ArrowUpRight } from 'lucide-react';
import { FeaturedProject } from '@/features/work/components/FeaturedProject';
import { ProjectCard } from '@/features/work/components/ProjectCard';
import { TechnologyGrid } from '@/features/technologies/components/TechnologyGrid';
import { projects, selectedWorkProjects } from '@/features/work/data/projectCatalog';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <main>
      <HomeHero />
      <section className={`${styles.section} ${layoutStyles.pageContainer}`} id="work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={utilityStyles.eyebrow}>01 / Selected work</p>
            <h2>
              Turning complexity
              <br />
              into clarity.
            </h2>
          </div>
          <p className={styles.sectionIntro}>
            A selection of work across product design, systems thinking, and front-end development.
          </p>
        </div>
        <FeaturedProject project={projects[0]} />
        <div className={styles.projectGrid}>
          {selectedWorkProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} variant="work" />
          ))}
        </div>
        <Link className={`${utilityStyles.textLink} ${styles.sectionLink}`} href="/work">
          View all work <ArrowUpRight size={16} />
        </Link>
      </section>
      <HomeApproach />
      <section className={`${styles.section} ${styles.capabilities} ${layoutStyles.pageContainer}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={utilityStyles.eyebrow}>03 / Skills &amp; Technologies</p>
            <h2>
              Curious by default.
              <br />
              Precise by practice.
            </h2>
          </div>
        </div>
        <TechnologyGrid />
      </section>
      <HomeContact />
    </main>
  );
}

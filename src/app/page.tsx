import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <main>
      <section className={`${styles.hero} ${layoutStyles.pageContainer}`}>
        <p className={`${utilityStyles.eyebrow} ${styles.heroKicker}`}>
          <span className={utilityStyles.statusDot} />
          Available for thoughtful problems
        </p>
        <h1>
          I design experiences.
          <br />
          <em>I build products.</em>
        </h1>
        <div className={styles.heroBottom}>
          <p className={styles.heroCopy}>
            Product designer and web developer working at the intersection of user experience,
            engineering, and business.
          </p>
          <Link className={utilityStyles.textLink} href="/work">
            Explore selected work <ArrowDown size={16} />
          </Link>
        </div>
      </section>
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
        <div className={styles.projectGrid}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
        <Link className={`${utilityStyles.textLink} ${styles.sectionLink}`} href="/work">
          View all work <ArrowUpRight size={16} />
        </Link>
      </section>
      <section className={styles.statementSection}>
        <div className={`${layoutStyles.pageContainer} ${styles.statement}`}>
          <p className={utilityStyles.eyebrow}>02 / Approach</p>
          <p className={styles.statementCopy}>
            I work where <span>good design</span>, <span>clear systems</span>, and{' '}
            <span>useful technology</span> meet.
          </p>
          <Link className={utilityStyles.textLink} href="/about">
            More about me <MoveUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className={`${styles.section} ${styles.capabilities} ${layoutStyles.pageContainer}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={utilityStyles.eyebrow}>03 / Capabilities</p>
            <h2>
              Curious by default.
              <br />
              Precise by practice.
            </h2>
          </div>
        </div>
        <div className={styles.capabilityGrid}>
          <div>
            <span>01</span>
            <h3>Product design</h3>
            <p>
              Requirements gathering, user research, prioritization, roadmapping, and prototyping.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Design systems</h3>
            <p>
              Reusable Figma components and shared decisions that help teams move with consistency.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Full-stack development</h3>
            <p>HTML, CSS, Angular, TypeScript, Node.js, PostgreSQL, and Python.</p>
          </div>
        </div>
      </section>
      <section className={styles.contactBand}>
        <div className={`${layoutStyles.pageContainer} ${styles.contactBandInner}`}>
          <p className={utilityStyles.eyebrow}>Have a good problem?</p>
          <h2>
            Let&apos;s make something
            <br />
            <em>useful.</em>
          </h2>
          <Link className={styles.buttonLink} href="/contact">
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}

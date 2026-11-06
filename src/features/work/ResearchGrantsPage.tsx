import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ProjectImage } from '@/components/ui/ProjectImage';
import { consistencyExamples, grantsHomeScreen } from './data/researchGrantsContent';
import { ResearchGrantsRoleExplorer } from './ResearchGrantsRoleExplorer';
import styles from './ResearchGrantsPage.module.css';

const processSteps = [
  {
    number: '01',
    title: 'Understand requirements',
    description:
      'Meet weekly with two web managers to understand their vision, requirements, and desired functionality.',
  },
  {
    number: '02',
    title: 'Create the designs',
    description:
      'Independently translate those conversations into original desktop interface designs in Figma.',
  },
  {
    number: '03',
    title: 'Review together',
    description: 'Bring the proposed designs back to the web managers for review and discussion.',
  },
  {
    number: '04',
    title: 'Continue development',
    description:
      'Incorporate feedback and continue developing a consistent experience across the application.',
  },
];

export function ResearchGrantsPage() {
  return (
    <main className={styles.caseStudy}>
      <section className={styles.section}>
        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link href="/work">
              <ArrowLeft size={14} /> Work
            </Link>
            <span>/</span>
            <span>Research Grants Management</span>
          </div>
          <p className={styles.kicker}>01 / Overview</p>
          <h1>Research Grants Management</h1>
          <p className={styles.description}>
            A unified platform for faculty, judges, and administrators to manage the research grant
            process.
          </p>
          <div className={styles.metaGrid}>
            <div>
              <span>Scope</span>
              <strong>31 screens</strong>
            </div>
            <div>
              <span>Roles</span>
              <strong>3 user roles</strong>
            </div>
            <div>
              <span>Role</span>
              <strong>Sole UX/UI Designer</strong>
            </div>
            <div>
              <span>Timeline</span>
              <strong>March–April 2026</strong>
            </div>
          </div>
          <div className={styles.heroFigure}>
            <ProjectImage
              src={grantsHomeScreen.src}
              alt={grantsHomeScreen.alt}
              width={grantsHomeScreen.width}
              height={grantsHomeScreen.height}
              crop={grantsHomeScreen.crop}
              expand
              priority
              caption={grantsHomeScreen.label}
              sizes="(max-width: 700px) 100vw, 1040px"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrid}`}>
        <div className={styles.sectionLabel}>
          <p>02 / Challenge</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>Three roles. One platform.</h2>
          <p>
            Designing 31 interconnected screens meant creating separate workflows for people with
            different responsibilities while keeping the application consistent as a whole. Faculty
            request research grants, judges evaluate grant requests, and administrators manage the
            overall process.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrid} ${styles.mutedSection}`}>
        <div className={styles.sectionLabel}>
          <p>03 / Process</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>From ideas to interfaces.</h2>
          <p className={styles.lead}>
            I designed the interface from scratch without seeing the previous Mendix designs. The
            work moved through weekly conversations, independent design, review, and continued
            development.
          </p>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <article className={styles.processCard} key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.solutionSection}`}>
        <div className={styles.sectionLabel}>
          <p>04 / Solution</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>Designed for every role.</h2>
          <p className={styles.lead}>
            Explore the role-specific screens and responsibilities within the 31-screen desktop
            application. Select a screen to expand it.
          </p>
          <ResearchGrantsRoleExplorer />
          <div className={styles.componentsSection}>
            <h3>Built to stay consistent.</h3>
            <p>
              I created reusable Figma components shared across the different user experiences. The
              examples below show the same application direction carried across Faculty, Judges, and
              Administrators.
            </p>
            <div className={styles.consistencyGrid}>
              {consistencyExamples.map((screen) => (
                <ProjectImage
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  crop={screen.crop}
                  caption={screen.label}
                  sizes="(max-width: 700px) 100vw, 30vw"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGrid} ${styles.mutedSection}`}>
        <div className={styles.sectionLabel}>
          <p>05 / Outcome</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>From design to development.</h2>
          <p className={styles.reflection}>
            The designs were implemented in Angular and are currently being used. This project
            strengthened my ability to translate stakeholder requirements into a complex
            application, collaborate with technical stakeholders, and build reusable UI patterns
            that support multiple user experiences.
          </p>
          <div className={styles.nextLinks}>
            <Link className={styles.textLink} href="/work">
              Back to selected work <ArrowUpRight size={16} />
            </Link>
            <Link className={styles.textLink} href="/contact">
              Discuss a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

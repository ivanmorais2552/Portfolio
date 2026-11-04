import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import styles from './ResearchGrantsCaseStudy.module.css';

const processSteps = [
  {
    number: '01',
    title: 'Understand requirements',
    description:
      'I learned the ideas, requirements, and desired workflows through conversations with the two web managers.',
  },
  {
    number: '02',
    title: 'Translate requirements',
    description:
      'I turned those conversations into original interface designs for the desktop web application.',
  },
  {
    number: '03',
    title: 'Refine collaboratively',
    description:
      'We collaborated to refine the proposed experience while keeping stakeholder guidance distinct from design ownership.',
  },
  {
    number: '04',
    title: 'Deliver a coherent system',
    description:
      'I carried the direction across the grant management workflows and delivered a consistent set of 31 screens.',
  },
];

const selectedScreens = [
  {
    src: '/images/grants/01-grants-home.png',
    alt: 'Research Grants Management grants home screen',
    caption: 'Grants home',
    width: 3840,
    height: 5800,
  },
  {
    src: '/images/grants/02-faculty-my-applications.png',
    alt: 'Research Grants Management faculty applications screen',
    caption: 'Faculty applications',
    width: 3840,
    height: 2814,
  },
  {
    src: '/images/grants/03-faculty-application-form.png',
    alt: 'Research Grants Management faculty application form screen',
    caption: 'Faculty application form',
    width: 3840,
    height: 7194,
  },
  {
    src: '/images/grants/05-reviewer-dashboard.png',
    alt: 'Research Grants Management reviewer dashboard screen',
    caption: 'Reviewer dashboard',
    width: 3840,
    height: 2814,
  },
  {
    src: '/images/grants/08-department-chair.png',
    alt: 'Research Grants Management department chair screen',
    caption: 'Department chair view',
    width: 3840,
    height: 2814,
  },
  {
    src: '/images/grants/10-admin-application-management.png',
    alt: 'Research Grants Management admin application management screen',
    caption: 'Admin application management',
    width: 2526,
    height: 2638,
  },
];

export function ResearchGrantsCaseStudy() {
  return (
    <main className={styles.caseStudy}>
      <section className={styles.hero}>
        <div className={styles.breadcrumb}>
          <Link href="/work">
            <ArrowLeft size={14} /> Work
          </Link>
          <span>/</span>
          <span>Research Grants Management</span>
        </div>
        <p className={styles.kicker}>Case study / 02</p>
        <h1>Turning complex requirements into a complete grant management experience.</h1>
        <p className={styles.subtitle}>
          Designing a new desktop web application from stakeholder conversations, without an
          existing interface to use as a visual reference.
        </p>
        <div className={styles.meta}>
          <span>
            <b>Role</b>
            Sole UX/UI Designer
          </span>
          <span>
            <b>Scope</b>
            31 desktop screens
          </span>
          <span>
            <b>Timeline</b>
            March – April 2026
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p>01 / Project overview</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            Designing from requirements,
            <br />
            <em>not an existing interface.</em>
          </h2>
          <div className={styles.copyGrid}>
            <p>
              I was the sole UX/UI designer responsible for the Research Grants Management redesign.
              Two web managers guided the work by explaining their ideas, requirements, and desired
              workflows.
            </p>
            <p>
              I did not have access to or use the previous Mendix interface as a visual reference. I
              designed the new interface from scratch based on conversations with the web managers,
              translating their requirements into a complete product experience.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.mutedSection}`}>
        <div className={styles.sectionLabel}>
          <p>02 / Design process</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            From stakeholder direction
            <br />
            <em>to a coherent experience.</em>
          </h2>
          <p className={styles.lead}>
            The work combined clear guidance from the two web managers with independent ownership of
            the interface design. Each step moved the project from conversation to a consistent set
            of grant management workflows.
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

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p>03 / Design ownership</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            Independent design work,
            <br />
            <em>collaborative direction.</em>
          </h2>
          <div className={styles.copyGrid}>
            <p>
              The web managers provided the context behind the product: their ideas, requirements,
              and desired workflows. Their guidance shaped what the experience needed to support.
            </p>
            <p>
              I independently created the interface designs, connecting those requirements into a
              consistent desktop web application across 31 screens.
            </p>
          </div>
          <div className={styles.scopeNote}>
            <span>Project scope</span>
            <strong>31 screens · desktop web application</strong>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.mutedSection}`}>
        <div className={styles.sectionLabel}>
          <p>04 / Selected screens</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            One experience across
            <br />
            <em>different responsibilities.</em>
          </h2>
          <p className={styles.lead}>
            A representative selection from the 31-screen desktop application, showing the interface
            direction across grant management roles and workflows.
          </p>
          <div className={styles.screenGrid}>
            {selectedScreens.map((screen) => (
              <figure className={styles.screenFigure} key={screen.src}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 700px) 100vw, 40vw"
                />
                <figcaption>{screen.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p>05 / Reflection</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            Turning conversations into
            <br />
            <em>product clarity.</em>
          </h2>
          <p className={styles.reflection}>
            This project was an exercise in translating stakeholder requirements into a complete,
            coherent product experience without an existing visual reference. The web managers
            guided the direction through their ideas and desired workflows; I owned the interface
            design work that brought that direction together across the application.
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

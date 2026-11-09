import { Download } from 'lucide-react';
import { contactDetails } from '@/features/contact/data/contactDetails';
import styles from './AboutPage.module.css';

const workExperience = [
  {
    role: 'Web Developer',
    organization: 'BYU College of Family, Home, and Social Sciences',
    dates: 'August 2026 – Present',
    bullets: [
      'Develop full-stack applications using HTML, CSS, Angular, TypeScript, Node.js, and PostgreSQL.',
      'Build custom research reports and troubleshoot database issues.',
      'Implement frontend features and bug fixes based on user feedback.',
    ],
  },
  {
    role: 'Product Designer',
    organization: 'BYU College of Family, Home, and Social Sciences',
    dates: 'January – August 2026',
    bullets: [
      'Led the Fulton Conference Platform redesign, creating 38 screens across five workflows.',
      'Built a reusable Figma design system with 102 component variants.',
      'Redesigned three research websites into a unified experience.',
      'Collaborated with developers and faculty on implementation-ready designs.',
    ],
  },
  {
    role: 'Inside Sales Specialist',
    organization: 'Sila Services',
    dates: 'June – November 2025',
    bullets: [
      'Contacted 50+ customers daily.',
      'Managed customer relationships and sales opportunities using ServiceTitan.',
    ],
  },
];

const skills = [
  {
    label: 'Product',
    items: [
      'Figma',
      'Requirements Gathering',
      'User Research',
      'Prioritization',
      'Roadmapping',
      'Prototyping',
    ],
  },
  {
    label: 'Technical',
    items: [
      'TypeScript',
      'JavaScript',
      'Angular',
      'SQL',
      'PostgreSQL',
      'Prisma',
      'Node.js',
      'Python',
      'Git/GitHub',
    ],
  },
];

export function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.introduction} aria-labelledby="about-title">
        <p className={styles.kicker}>02 / About</p>
        <h1 id="about-title">
          A designer who
          <br />
          <em>likes to understand.</em>
        </h1>
        <p className={styles.introductionCopy}>
          I work at the intersection of product design, engineering, and business. I enjoy
          understanding complex problems, designing thoughtful experiences, and building technology
          that solves real problems.
        </p>
        <a
          className={styles.resumeLink}
          href={contactDetails.resumeHref}
          download="Ivan-Morais-Resume.pdf"
        >
          Download résumé <Download size={15} aria-hidden="true" />
        </a>
      </section>

      <section className={styles.section} aria-labelledby="education-title">
        <div className={styles.sectionHeading}>
          <h2 id="education-title">Education</h2>
        </div>
        <div className={styles.sectionContent}>
          <article className={styles.educationEntry}>
            <div className={styles.entryHeader}>
              <div>
                <h3>Brigham Young University</h3>
                <p>Information Systems</p>
              </div>
            </div>
            <div className={styles.educationFacts}>
              <p>
                <span>GPA</span>
                <strong>3.92</strong>
              </p>
              <p>
                <span>Graduation</span>
                <strong>Expected bachelor&apos;s graduation: April 2029</strong>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="experience-title">
        <div className={styles.sectionHeading}>
          <h2 id="experience-title">Work experience</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.entryList}>
            {workExperience.map((entry) => (
              <article className={styles.resumeEntry} key={`${entry.role}-${entry.dates}`}>
                <div className={styles.entryHeader}>
                  <div>
                    <h3>{entry.role}</h3>
                    <p>{entry.organization}</p>
                  </div>
                  <time>{entry.dates}</time>
                </div>
                <ul className={styles.bulletList}>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="leadership-title">
        <div className={styles.sectionHeading}>
          <h2 id="leadership-title">Leadership &amp; service</h2>
        </div>
        <div className={styles.sectionContent}>
          <ul className={styles.serviceList}>
            <li className={styles.serviceEntry}>
              <div>
                <strong>Full-Time Missionary</strong>
                <span>Lima, Peru</span>
              </div>
              <time>October 2022 – September 2024</time>
              <p>
                Mentored 30 volunteers and served on a leadership council coordinating 150+
                volunteers.
              </p>
            </li>
            <li className={styles.serviceEntry}>
              <strong>BYU FlexGE Student Council Member</strong>
            </li>
            <li className={styles.serviceEntry}>
              <strong>BYU Student Association for Latin American Studies officer</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="skills-title">
        <div className={styles.sectionHeading}>
          <h2 id="skills-title">Skills</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.skillList}>
            {skills.map((skill) => (
              <div className={styles.skillRow} key={skill.label}>
                <h3>{skill.label}</h3>
                <div className={styles.skillTags}>
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className={styles.skillRow}>
              <h3>Languages</h3>
              <p className={styles.language}>Spanish — Full professional proficiency.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="awards-title">
        <div className={styles.sectionHeading}>
          <h2 id="awards-title">Awards</h2>
        </div>
        <div className={styles.sectionContent}>
          <article className={styles.awardEntry}>
            <h3>First Place — Figma-Sponsored UX/UI Design Challenge (2026)</h3>
            <p>Timed, team-based competition hosted by the BYU UX Design Club.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

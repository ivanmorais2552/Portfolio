import { AboutExperience } from './components/AboutExperience';
import { AboutCapabilities } from './components/AboutCapabilities';
import { PageIntro } from '@/components/ui/PageIntro';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <main>
      <PageIntro
        label="02 / About"
        title={
          <>
            A designer who
            <br />
            <em>likes to understand.</em>
          </>
        }
        description="I work at the intersection of product design, engineering, and business. I enjoy understanding complex problems, designing thoughtful experiences, and building technology that solves real problems."
      />
      <section className={`${styles.content} ${layoutStyles.pageContainer}`}>
        <div className={styles.grid}>
          <div>
            <p className={utilityStyles.eyebrow}>Background</p>
            <p className={styles.largeCopy}>
              I&apos;m Ivan Morais, an Information Systems student at Brigham Young University. My
              work spans product design, development, and the systems that connect them.
            </p>
          </div>
          <div className={styles.facts}>
            <div>
              <span>Education</span>
              <strong>BYU · Information Systems</strong>
              <small>Expected graduation: April 2029</small>
            </div>
            <div>
              <span>Academic standing</span>
              <strong>GPA: 3.92</strong>
            </div>
          </div>
        </div>
        <AboutExperience />
        <div className={styles.awardBlock}>
          <p className={utilityStyles.eyebrow}>Recognition</p>
          <p className={styles.awardCopy}>
            <strong>First place</strong> in a Figma-sponsored UX/UI Design Challenge in 2026, a
            timed team-based competition hosted by the BYU UX Design Club.
          </p>
        </div>
        <AboutCapabilities />
      </section>
    </main>
  );
}

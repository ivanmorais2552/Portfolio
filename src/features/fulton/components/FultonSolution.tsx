import { FultonReveal } from './FultonReveal';
import { FultonAdministration } from './FultonAdministration';
import { FultonJudging } from './FultonJudging';
import { FultonPrinting } from './FultonPrinting';
import { FultonSubmissionsAwards } from './FultonSubmissionsAwards';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonSolution() {
  return (
    <>
      <FultonReveal>
        <section className={styles.solutionIntro} id="solution">
          <div className={styles.solutionIntroInner}>
            <div className={styles.sectionLabel}>
              <p className={utilityStyles.eyebrow}>04 / Solution</p>
            </div>
            <div className={styles.sectionContent}>
              <h2>
                Three decisions,
                <br />
                <em>one connected system.</em>
              </h2>
              <p className={styles.lead}>
                The solution took shape around the people responsible for running the conference. I
                focused the case study on three decisions that show how stakeholder needs became
                concrete interface choices: administration, judging, and printing.
              </p>
            </div>
          </div>
        </section>
      </FultonReveal>
      <FultonAdministration />
      <FultonJudging />
      <FultonPrinting />
      <FultonSubmissionsAwards />
    </>
  );
}

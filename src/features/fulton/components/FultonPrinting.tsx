import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonPrinting() {
  return (
    <FultonReveal>
      <section className={styles.section} id="printing">
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>04C / Printing</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
              Less Dependency.
            <br />
              <em>More Control.</em>
          </h2>
          <p className={styles.lead}>
            Printing staff previously needed administrator intervention to resolve printing
            problems. I redesigned the workflow so the people handling printing could resolve
            routine issues directly, while simplifying and reorganizing the interface.
          </p>
          <div className={styles.decisionGrid}>
            <div className={styles.decisionBlock}>
              <p className={styles.decisionLabel}>Problem</p>
              <p>Routine printing problems created unnecessary dependency on administrators.</p>
            </div>
            <div className={styles.decisionBlock}>
              <p className={styles.decisionLabel}>Design decision</p>
              <p>
                I brought poster status, printer assignment, problem reporting, and issue resolution
                into a simpler operational workflow.
              </p>
            </div>
            <div className={styles.decisionBlock}>
              <p className={styles.decisionLabel}>Why it matters</p>
              <p>
                Printing staff have greater control over resolving routine issues without requiring
                administrative intervention.
              </p>
            </div>
            <div className={styles.decisionBlock}>
              <p className={styles.decisionLabel}>Outcome</p>
                <p>
                  The redesigned workflow removes the need for administrators to handle routine
                  issue resolution.
                </p>
            </div>
          </div>
          <figure className={styles.imageWide}>
            <FultonImage
              src="/images/fulton/printing/Printing%402x.png"
              alt="Fulton printing management screen"
              width={3840}
              height={2462}
              crop={{ aspectRatio: '16 / 9', objectPosition: '50% 18%', scale: 1.05 }}
            />
            <figcaption>Printing management · original export</figcaption>
          </figure>
          <div className={`${styles.imagePair} ${styles.imagePairSmall}`}>
            <figure>
              <FultonImage
                src="/images/fulton/printing/Print%20Modal%402x.png"
                alt="Fulton print modal"
                width={3600}
                height={2000}
              />
              <figcaption>Print action · supporting export</figcaption>
            </figure>
            <figure>
              <FultonImage
                src="/images/fulton/printing/Print%20Note%20for%20Admin%402x.png"
                alt="Fulton print note for an administrator"
                width={1178}
                height={594}
              />
              <figcaption>Problem handoff and resolution · supporting export</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import { RoleSwitchDemo } from './RoleSwitchDemo';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonJudging() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection}>
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>04 / Judging experience</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Make the next decision
              <br />
              <em>easier to see.</em>
            </h2>
            <p className={styles.lead}>
              The judging experience needed to support different responsibilities without making the
              overall system feel disconnected. The exports show assignment, evaluation, scoring
              rubrics, progress, and winner selection.
            </p>
            <div className={styles.imagePair}>
              <figure>
                <FultonImage
                  src="/images/fulton/judging/Assign%20Judges%20(Lead%20Judge).png"
                  alt="Lead judge assignment screen"
                  width={3840}
                  height={2978}
                  crop={{ aspectRatio: '4 / 3', objectPosition: '50% 8%', scale: 1.06 }}
                />
                <figcaption>Lead judge assignment · original export</figcaption>
              </figure>
              <figure>
                <FultonImage
                  src="/images/fulton/judging/Scoring.png"
                  alt="Lead judge scoring screen"
                  width={3840}
                  height={2978}
                  crop={{ aspectRatio: '4 / 3', objectPosition: '50% 8%', scale: 1.06 }}
                />
                <figcaption>Scoring overview · original export</figcaption>
              </figure>
            </div>
            <RoleSwitchDemo />
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

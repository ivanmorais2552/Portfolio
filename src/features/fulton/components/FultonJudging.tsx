import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import { RoleSwitchDemo } from './RoleSwitchDemo';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonJudging() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection} id="judging">
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>04B / Judging</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              A Better Judging
              <br />
              <em>Experience</em>
            </h2>
            <p className={styles.lead}>
              Judges needed a clearer way to view projects, scoring information, and assignments. I
              redesigned the experience to make project details and scoring easier to inspect while
              expanding access to automatic judge assignment.
            </p>
            <div className={styles.decisionGrid}>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Problem</p>
                <p>
                  Project details, assignments, and scoring information were not easy to inspect
                  together.
                </p>
              </div>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Design decision</p>
                <p>
                  I created a cleaner judging experience with clearer project presentation, more
                  inspectable scoring information, and automatic judge assignment.
                </p>
              </div>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Why it matters</p>
                <p>
                  Important information and actions are easier to access for the people judging the
                  work.
                </p>
              </div>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Qualitative observation</p>
                <p>
                  In my own comparison of the workflows, the redesigned experience feels faster and
                  easier to navigate. This is a personal assessment, not a measured time
                  improvement.
                </p>
              </div>
            </div>
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
            <div className={`${styles.imagePair} ${styles.imagePairSmall}`}>
              <figure>
                <FultonImage
                  src="/images/fulton/judging/Dashboard.png"
                  alt="Fulton judging dashboard showing assigned work"
                  width={3840}
                  height={2396}
                />
                <figcaption>Project details and assigned work · original export</figcaption>
              </figure>
              <figure>
                <FultonImage
                  src="/images/fulton/judging/Automatically%20Assign.png"
                  alt="Fulton automatic judge assignment control"
                  width={732}
                  height={422}
                />
                <figcaption>Automatic assignment · original export</figcaption>
              </figure>
            </div>
            <RoleSwitchDemo />
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

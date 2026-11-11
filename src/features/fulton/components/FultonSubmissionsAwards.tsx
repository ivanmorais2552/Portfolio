import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonSubmissionsAwards() {
  return (
    <FultonReveal>
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>Supporting workflows</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            The connected system,
            <br />
            <em>beyond the centerpiece.</em>
          </h2>
          <p className={styles.lead}>
            Submissions and awards remain part of the broader conference workflow. They are included
            here as supporting evidence of the system&apos;s scope, while the three design decisions
            above carry the narrative focus.
          </p>
          <div className={styles.imagePair}>
            <figure>
              <FultonImage
                src="/images/fulton/submissions/Submission-1.png"
                alt="Fulton submission workflow screen"
                width={3840}
                height={2384}
              />
              <figcaption>Submission workflow · original export</figcaption>
            </figure>
            <figure>
              <FultonImage
                src="/images/fulton/awards/Awards%20Manager.png"
                alt="Fulton awards manager screen"
                width={3840}
                height={2540}
              />
              <figcaption>Awards manager · original export</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

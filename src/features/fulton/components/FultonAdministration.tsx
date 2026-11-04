import { FultonReveal } from './FultonReveal';
import { AnnotatedDashboard } from './AnnotatedDashboard';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonAdministration() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection}>
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>06 / Administrative experience</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              One view of the
              <br />
              <em>operational picture.</em>
            </h2>
            <p className={styles.lead}>
              The admin experience connects conference setup, submissions, presenters, RSVP
              information, printing, judging progress, and awards into a shared view of the event.
            </p>
            <AnnotatedDashboard />
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

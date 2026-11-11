import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonOverview() {
  return (
    <FultonReveal>
      <section className={styles.section} id="overview">
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>01 / Overview</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            A conference platform,
            <br />
            <em>redesigned from the ground up.</em>
          </h2>
          <div className={styles.copyGrid}>
            <p>
              Fulton Conference Management supports the operations behind semiannual research
              conferences at Brigham Young University, with approximately 500 participants per
              event. The engineering team was migrating the platform from Mendix to Angular, so we
              used the transition as an opportunity to rethink the experience instead of reproducing
              an interface I had never seen.
            </p>
            <p>
              I led the UX/UI design and collaborated with the assistant to the dean, web team
              manager, and conference administrator. Stakeholders defined requirements and retained
              final approval over features and designs; I translated those needs into the interface
              and carried each workflow through review and refinement.
            </p>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

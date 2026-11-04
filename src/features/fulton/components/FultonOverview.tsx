import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonOverview() {
  return (
    <FultonReveal>
      <section className={styles.section} id="overview">
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>01 / Project overview</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            One platform.
            <br />
            <em>Many responsibilities.</em>
          </h2>
          <div className={styles.copyGrid}>
            <p>
              Fulton Conference Management was transitioning from Mendix to Angular. Instead of
              reproducing the old interface, the team used the transition as an opportunity to
              rethink the product experience from the ground up.
            </p>
            <p>
              Faculty had expressed frustrations with confusing workflows, the judging process, and
              slow, problematic printing operations. I owned the design work and collaborated with
              faculty leadership and the web team manager, with stakeholders providing final
              approval on features and designs.
            </p>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

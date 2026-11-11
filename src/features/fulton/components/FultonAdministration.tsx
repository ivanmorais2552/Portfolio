import { FultonReveal } from './FultonReveal';
import { FultonImage } from './FultonImage';
import { AnnotatedDashboard } from './AnnotatedDashboard';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonAdministration() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection} id="administration">
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>04A / Administration</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Clarity and
              <br />
              <em>Control</em>
            </h2>
            <p className={styles.lead}>
              Administrative tools were scattered throughout the previous platform, making
              functionality difficult to find. I met directly with the conference administrator to
              understand how she wanted the work organized and what she needed to monitor.
            </p>
            <div className={styles.decisionGrid}>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Problem</p>
                <p>Related administrative functions were difficult to locate and understand.</p>
              </div>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>What stakeholders needed</p>
                <p>
                  The conference administrator described difficult-to-find functions, unnecessary
                  elements, and the information she wanted visible at a glance.
                </p>
              </div>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Design decision</p>
                <p>
                  I introduced organized sidebar navigation, grouped related functions, removed
                  unnecessary elements, and designed a centralized dashboard.
                </p>
              </div>
              <div className={styles.decisionBlock}>
                <p className={styles.decisionLabel}>Why it matters</p>
                <p>
                  The interface is organized around the administrator&apos;s actual
                  responsibilities, including judging progress and other conference operations.
                </p>
              </div>
            </div>
            <AnnotatedDashboard />
            <div className={styles.imagePair}>
              <figure>
                <FultonImage
                  src="/images/fulton/admin/Judging%20Progress.png"
                  alt="Fulton administrative judging progress screen"
                  width={3840}
                  height={3014}
                />
                <figcaption>Judging progress · original Fulton admin export</figcaption>
              </figure>
              <figure>
                <FultonImage
                  src="/images/fulton/admin/Conference.png"
                  alt="Fulton conference administration screen"
                  width={3840}
                  height={2718}
                />
                <figcaption>Conference management · original Fulton admin export</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

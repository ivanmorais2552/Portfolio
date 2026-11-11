import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonReflection() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection} id="outcome">
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>05 / Outcome</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Designed for the work
              <br />
              <em>behind the event.</em>
            </h2>
            <div className={styles.copyGrid}>
              <p>
                The designs were implemented in the Angular platform. My contribution was the
                product design work across the conference workflows; I did not develop the
                production Angular application. The intended scale is semiannual conferences with
                approximately 500 participants per event, not a measured redesign outcome.
              </p>
              <p>
                The work reinforced that complex operational systems are shaped by the relationships
                between workflows, not just the screens within them. Repeated stakeholder
                collaboration made those relationships visible and gave each workflow a clear path
                from requirements to an approved design.
              </p>
            </div>
            <div className={styles.next}>
              <Link className={utilityStyles.textLink} href="/work">
                Back to selected work <ArrowUpRight size={16} />
              </Link>
              <Link className={utilityStyles.textLink} href="/contact">
                Discuss a project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

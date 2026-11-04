import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonReflection() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection}>
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>08 / Implementation and reflection</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Designing for the
              <br />
              <em>people in the system.</em>
            </h2>
            <div className={styles.copyGrid}>
              <p>
                The designs were implemented in the Angular platform. My contribution was the
                product design work across the conference workflows, including the judging
                experience, administrative controls, printing management, submissions, awards, and
                the reusable interface system.
              </p>
              <p>
                The platform supports semiannual conferences with approximately 500 participants per
                event. The work reinforced how much clarity comes from designing the relationships
                between workflows, not just the screens within them.
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

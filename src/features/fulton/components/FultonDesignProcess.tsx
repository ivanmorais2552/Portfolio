import { ArrowRight } from 'lucide-react';
import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonDesignProcess() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection}>
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>02 / The design process</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Work through one
              <br />
              <em>workflow at a time.</em>
            </h2>
            <div className={styles.processSteps}>
              {[
                'Define workflow',
                'Design',
                'Stakeholder review',
                'Iterate',
                'Finalize',
                'Next workflow',
              ].map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                  {index < 5 && <ArrowRight size={15} />}
                </div>
              ))}
            </div>
            <div className={styles.wireframe}>
              <FultonImage
                src="/images/fulton/wireframes/Fulton%20Judging%20Wireframe.png"
                alt="Original Fulton judging workflow wireframe"
                width={14786}
                height={4929}
              />
              <p>Original judging wireframe · workflow relationships and role responsibilities</p>
            </div>
            <p className={styles.supportingCopy}>
              Meetings occurred biweekly. Each cycle focused on clarifying a single workflow,
              reviewing the proposed direction with stakeholders, incorporating feedback, and
              finalizing the experience before moving to the next one.
            </p>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

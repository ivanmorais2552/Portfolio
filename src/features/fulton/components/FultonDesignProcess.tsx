import { ArrowRight } from 'lucide-react';
import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonDesignProcess() {
  return (
    <FultonReveal>
      <section className={styles.mutedSection} id="process">
        <div className={styles.mutedSectionInner}>
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>03 / Process</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Define, design,
              <br />
              <em>review, refine.</em>
            </h2>
            <div className={styles.processSteps}>
              {[
                'Define',
                'Design',
                'Review',
                'Refine',
                'Repeat',
                'Approve',
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
            <div className={styles.copyGrid}>
              <p>
                For each workflow, we discussed requirements and desired functionality, defined the
                flow with stakeholders, and then I independently created the Figma designs. I
                presented the work during biweekly meetings and used those conversations to guide
                the next revision.
              </p>
              <p>
                Reviews covered navigation, button placement, feature organization, scoring
                requirements, judge assignments, permissions, printing operations, and
                administrative capabilities. We repeated the review and refinement process as many
                times as necessary before stakeholders approved a workflow and we moved to the next.
              </p>
            </div>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

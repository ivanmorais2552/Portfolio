import { FultonReveal } from './FultonReveal';
import { WorkflowMap } from './WorkflowMap';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonWorkflow() {
  return (
    <FultonReveal>
      <section className={styles.section} id="challenge">
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>02 / Challenge</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            One event,
            <br />
            <em>many connected workflows.</em>
          </h2>
          <p className={styles.lead}>
            Conference operations move across submissions, printing, judging, and awards, with
            administration providing oversight across the system. Faculty stakeholders had
            identified confusing administrative navigation, judging workflows, printing operations,
            and gaps in administrative control as problems worth rethinking.
          </p>
          <p className={styles.supportingCopy}>
            The challenge was not simply to add screens for a new Angular application. It was to
            make the relationships between responsibilities easier to understand while keeping the
            people running the conference in control of their work.
          </p>
          <WorkflowMap />
        </div>
      </section>
    </FultonReveal>
  );
}

import { FultonReveal } from './FultonReveal';
import { WorkflowMap } from './WorkflowMap';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonWorkflow() {
  return (
    <FultonReveal>
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>03 / Interactive workflow map</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            Connected work,
            <br />
            <em>made visible.</em>
          </h2>
          <p className={styles.lead}>
            The conference experience moves through four connected workflows. Administration
            provides the oversight layer across each one.
          </p>
          <WorkflowMap />
        </div>
      </section>
    </FultonReveal>
  );
}

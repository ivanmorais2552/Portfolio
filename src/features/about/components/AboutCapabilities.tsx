import utilityStyles from '@/styles/Utility.module.css';
import styles from './AboutCapabilities.module.css';

export function AboutCapabilities() {
  return (
    <div className={styles.skillsBlock}>
      <p className={utilityStyles.eyebrow}>Capabilities &amp; tools</p>
      <div className={styles.skillGroup}>
        <span>Product</span>
        <div className={styles.skillList}>
          <span>Figma</span>
          <span>Requirements gathering</span>
          <span>User research</span>
          <span>Prioritization</span>
          <span>Roadmapping</span>
          <span>Prototyping</span>
        </div>
      </div>
      <div className={styles.skillGroup}>
        <span>Technical</span>
        <div className={styles.skillList}>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>Angular</span>
          <span>SQL</span>
          <span>PostgreSQL</span>
          <span>Prisma</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>Git / GitHub</span>
        </div>
      </div>
      <div className={styles.skillGroup}>
        <span>Language</span>
        <div className={styles.skillList}>
          <span>Spanish · Full professional proficiency</span>
        </div>
      </div>
    </div>
  );
}

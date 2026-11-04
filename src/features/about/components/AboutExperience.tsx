import utilityStyles from '@/styles/Utility.module.css';
import styles from './AboutExperience.module.css';

export function AboutExperience() {
  return (
    <>
      <div className={styles.experienceBlock}>
        <p className={utilityStyles.eyebrow}>Experience</p>
        <div className={styles.experienceRow}>
          <div>
            <strong>Web Developer</strong>
            <span>BYU College of Family, Home, and Social Sciences</span>
          </div>
          <span>August 2026 — present</span>
        </div>
        <p className={styles.experienceDetail}>
          Develop full-stack applications, build custom research reports, troubleshoot database
          issues with researchers, and implement frontend features and bug fixes based on user
          feedback and requirements.
        </p>
        <div className={styles.experienceRow}>
          <div>
            <strong>Product Designer</strong>
            <span>BYU College of Family, Home, and Social Sciences</span>
          </div>
          <span>January — August 2026</span>
        </div>
        <p className={styles.experienceDetail}>
          Independently led the Fulton Conference Platform redesign, created 38 screens across five
          workflows, built a Figma design system with 102 component variants, and redesigned three
          research websites into a unified experience.
        </p>
        <div className={styles.experienceRow}>
          <div>
            <strong>Inside Sales Specialist</strong>
            <span>Sila Services</span>
          </div>
          <span>June — November 2025</span>
        </div>
      </div>
      <div className={`${styles.experienceBlock} ${styles.additionalExperience}`}>
        <p className={utilityStyles.eyebrow}>Leadership &amp; involvement</p>
        <div className={styles.experienceRow}>
          <div>
            <strong>Missionary &amp; leadership experience</strong>
            <span>Lima, Peru</span>
          </div>
          <span>October 2022 — September 2024</span>
        </div>
        <p className={styles.experienceDetail}>
          Mentored 30 volunteers and served on a leadership council coordinating more than 150
          volunteers.
        </p>
        <div className={styles.experienceRow}>
          <div>
            <strong>Student involvement</strong>
            <span>Brigham Young University</span>
          </div>
          <span>Current &amp; previous</span>
        </div>
        <p className={styles.experienceDetail}>
          BYU FlexGE Student Council Member; BYU Student Association for Latin American Studies
          officer.
        </p>
      </div>
    </>
  );
}

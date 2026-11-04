import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './PageIntro.module.css';

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className={`${styles.intro} ${layoutStyles.pageContainer}`}>
      <p className={utilityStyles.eyebrow}>{label}</p>
      <h1>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </section>
  );
}

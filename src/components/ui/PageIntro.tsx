import type { ReactNode } from 'react';

import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './PageIntro.module.css';

type PageIntroProps = {
  label: string;
  title: ReactNode;
  description?: string;
  compact?: boolean;
};

export function PageIntro({ label, title, description, compact = false }: PageIntroProps) {
  return (
    <section
      className={`${styles.intro} ${compact ? styles.compact : ''} ${layoutStyles.pageContainer}`}
    >
      <p className={utilityStyles.eyebrow}>{label}</p>
      <h1>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </section>
  );
}

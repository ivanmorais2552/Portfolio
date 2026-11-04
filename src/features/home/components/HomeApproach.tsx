import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './HomeApproach.module.css';

export function HomeApproach() {
  return (
    <section className={styles.statementSection}>
      <div className={`${layoutStyles.pageContainer} ${styles.statement}`}>
        <p className={utilityStyles.eyebrow}>02 / Approach</p>
        <p className={styles.statementCopy}>
          I work where <span>good design</span>, <span>clear systems</span>, and{' '}
          <span>useful technology</span> meet.
        </p>
        <Link className={utilityStyles.textLink} href="/about">
          More about me <MoveUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

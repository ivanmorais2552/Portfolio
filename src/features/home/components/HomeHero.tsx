import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './HomeHero.module.css';

export function HomeHero() {
  return (
    <section className={`${styles.hero} ${layoutStyles.pageContainer}`}>
      <p className={`${utilityStyles.eyebrow} ${styles.heroKicker}`}>
        <span className={utilityStyles.statusDot} />
        Available for thoughtful problems
      </p>
      <h1>
        I design experiences.
        <br />
        <em>I build products.</em>
      </h1>
      <div className={styles.heroBottom}>
        <p className={styles.heroCopy}>
          Product designer and web developer working at the intersection of user experience,
          engineering, and business.
        </p>
        <Link className={utilityStyles.textLink} href="/work">
          Explore selected work <ArrowDown size={16} />
        </Link>
      </div>
    </section>
  );
}

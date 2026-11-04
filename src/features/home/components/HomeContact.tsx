import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './HomeContact.module.css';

export function HomeContact() {
  return (
    <section className={styles.contactBand}>
      <div className={`${layoutStyles.pageContainer} ${styles.contactBandInner}`}>
        <p className={utilityStyles.eyebrow}>Have a good problem?</p>
        <h2>
          Let&apos;s make something
          <br />
          <em>useful.</em>
        </h2>
        <Link className={styles.buttonLink} href="/contact">
          Get in touch <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

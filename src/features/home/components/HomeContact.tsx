import { ArrowUpRight, Download } from 'lucide-react';
import { contactDetails } from '@/features/contact/data/contactDetails';
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
        <div className={styles.actions}>
          <a className={styles.buttonLink} href={contactDetails.emailHref}>
            Email me <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className={styles.secondaryLink}
            href={contactDetails.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Ivan Morais on LinkedIn (opens in a new tab)"
          >
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            className={styles.secondaryLink}
            href={contactDetails.resumeHref}
            download="Ivan-Morais-Resume.pdf"
          >
            Download résumé <Download size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Download } from 'lucide-react';
import { PageIntro } from '@/components/ui/PageIntro';
import { contactDetails } from './data/contactDetails';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './ContactPage.module.css';

export function ContactPage() {
  return (
    <main>
      <PageIntro
        compact
        label="03 / Contact"
        title={
          <>
            Let&apos;s talk about
            <br />
            <em>good problems.</em>
          </>
        }
        description="For opportunities, collaborations, or a thoughtful conversation about product design and development."
      />
      <section className={`${styles.content} ${layoutStyles.pageContainer}`}>
        <div className={styles.list}>
          <div>
            <span className={utilityStyles.eyebrow}>Email</span>
            <a className={styles.contactLink} href={contactDetails.emailHref}>
              <span>{contactDetails.email}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <small>For internships, collaborations, and questions.</small>
          </div>
          <div>
            <span className={utilityStyles.eyebrow}>LinkedIn</span>
            <a
              className={styles.contactLink}
              href={contactDetails.linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Ivan Morais on LinkedIn (opens in a new tab)"
            >
              <span>View LinkedIn profile</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <small>Professional experience and updates.</small>
          </div>
          <div>
            <span className={utilityStyles.eyebrow}>Résumé</span>
            <a
              className={styles.contactLink}
              href={contactDetails.resumeHref}
              download="Ivan-Morais-Resume.pdf"
              aria-label="Download Ivan Morais résumé (PDF)"
            >
              <span>Download résumé</span>
              <Download size={18} aria-hidden="true" />
            </a>
            <small>One-page PDF with experience and education.</small>
          </div>
        </div>
      </section>
    </main>
  );
}

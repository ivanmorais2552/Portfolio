import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/ui/PageIntro';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './ContactPage.module.css';

export function ContactPage() {
  return (
    <main>
      <PageIntro
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
            <strong>email placeholder</strong>
            <small>Contact information will be added soon.</small>
          </div>
          <div>
            <span className={utilityStyles.eyebrow}>LinkedIn</span>
            <strong>
              LinkedIn placeholder <ArrowUpRight size={18} />
            </strong>
            <small>Social link will be added soon.</small>
          </div>
        </div>
      </section>
    </main>
  );
}

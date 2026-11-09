import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PersonalProjectsGallery } from '@/features/personal-projects/components/PersonalProjectsGallery';
import { PageIntro } from '@/components/ui/PageIntro';
import layoutStyles from '@/styles/Layout.module.css';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './PersonalProjectsPage.module.css';

export function PersonalProjectsPage() {
  return (
    <main>
      <PageIntro
        label="Independent work / Creative explorations"
        title={
          <>
            Made out of
            <br />
            <em>curiosity.</em>
          </>
        }
        description="A collection of independent design experiments exploring digital products, visual identities, and ideas I wanted to bring to life."
      />
      <section className={`${styles.gallery} ${layoutStyles.pageContainer}`}>
        <PersonalProjectsGallery />
      </section>
      <nav
        className={`${styles.backNavigation} ${layoutStyles.pageContainer}`}
        aria-label="Project navigation"
      >
        <Link className={utilityStyles.textLink} href="/work">
          Back to selected work <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </main>
  );
}

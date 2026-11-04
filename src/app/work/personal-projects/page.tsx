import { PersonalProjectsGallery } from '@/components/PersonalProjectsGallery';
import { PageIntro } from '@/components/page-intro';
import layoutStyles from '@/styles/Layout.module.css';
import styles from './PersonalProjects.module.css';

export default function PersonalProjectsPage() {
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
    </main>
  );
}

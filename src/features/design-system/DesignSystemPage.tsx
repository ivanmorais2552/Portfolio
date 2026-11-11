import { ArrowDown, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProjectImage } from '@/components/ui/ProjectImage';
import { LibraryGallery } from './components/LibraryGallery';
import { designSystemOverview } from './data/designSystemContent';
import utilityStyles from '@/styles/Utility.module.css';
import styles from './DesignSystemPage.module.css';

export function DesignSystemPage() {
  return (
    <div className={styles.page}>
      <main className={styles.caseStudy}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.breadcrumb}>
              <Link href="/work">
                <ArrowLeft size={14} /> Work
              </Link>
              <span>/</span>
              <span>BYU Design System</span>
            </div>
            <p className={`${utilityStyles.eyebrow} ${styles.heroKicker}`}>Case study / 03</p>
            <h1>BYU Design System</h1>
            <p className={styles.subtitle}>
              A reusable Figma library built to connect design and development.
            </p>
            <div className={styles.meta}>
              <span>
                <b>Role</b>Sole UX/UI Designer
              </span>
              <span>
                <b>Scope</b>102 component variants
              </span>
              <span>
                <b>Deliverable</b>Figma design system
              </span>
              <span>
                <b>Year</b>2026
              </span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <ProjectImage
              src={designSystemOverview.src}
              alt={designSystemOverview.alt}
              width={designSystemOverview.width}
              height={designSystemOverview.height}
              priority
              expand
              sizes="(max-width: 700px) 100vw, 1200px"
            />
            <p>Complete light and dark component overview · original Figma export</p>
          </div>
          <a className={styles.scroll} href="#overview" aria-label="Scroll to project overview">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section className={styles.section} id="overview">
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>01 / Overview</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              A shared language
              <br />
              <em>for the interface.</em>
            </h2>
            <div className={styles.copyGrid}>
              <p>
                I independently created a reusable Figma component library using the existing
                Angular components as design references. The library covered 102 component variants
                and was used across the applications our team worked on.
              </p>
              <p>
                The project started as a way to reduce repetitive design work, then became a shared
                resource for aligning Figma with development and helping teammates create familiar,
                consistent interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.mutedSection} id="challenge">
          <div className={styles.mutedSectionInner}>
            <div className={styles.sectionLabel}>
              <p className={utilityStyles.eyebrow}>02 / Challenge</p>
            </div>
            <div className={styles.sectionContent}>
              <h2>
                Why It
                <br />
                <em>Started</em>
              </h2>
              <p className={styles.lead}>
                I was repeatedly creating similar components across different applications. That
                repetition slowed my own design process and made consistency harder to maintain.
              </p>
              <p className={styles.supportingCopy}>
                The team also needed closer alignment between Figma and the Angular patterns already
                in use. Some teammates had limited Figma experience, so I wanted a familiar set of
                components they could drag into their work instead of building every piece from
                scratch.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="approach">
          <div className={styles.sectionLabel}>
            <p className={utilityStyles.eyebrow}>03 / Approach</p>
          </div>
          <div className={styles.sectionContent}>
            <h2>
              Built for
              <br />
              <em>Reuse</em>
            </h2>
            <div className={styles.processSteps}>
              {[
                'Study Angular',
                'Recreate in Figma',
                'Organize variants',
                'Support themes',
                'Share with team',
              ].map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
            <div className={styles.copyGrid}>
              <p>
                I studied the existing Angular components and recreated the corresponding patterns
                in Figma. I organized reusable components and variants, designed different
                interaction states, and supported both light and dark appearances.
              </p>
              <p>
                Making the library available to the team connected design decisions to the patterns
                engineering was already using. It also gave teammates a practical starting point
                for creating consistent interfaces without requiring deep Figma experience.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.librarySection} id="library">
          <div className={styles.libraryIntro}>
            <div className={styles.sectionLabel}>
              <p className={utilityStyles.eyebrow}>04 / Library</p>
            </div>
            <div className={styles.sectionContent}>
              <h2>
                The
                <br />
                <em>Components</em>
              </h2>
              <p className={styles.lead}>
                The library made reusable UI elements, typography, and text sizes easier to find and
                apply across the team&apos;s applications.
              </p>
            </div>
          </div>
          <LibraryGallery />
        </section>

        <section className={styles.mutedSection} id="impact">
          <div className={styles.mutedSectionInner}>
            <div className={styles.sectionLabel}>
              <p className={utilityStyles.eyebrow}>05 / Impact</p>
            </div>
            <div className={styles.sectionContent}>
              <h2>
                Shared Across
                <br />
                <em>Applications</em>
              </h2>
              <div className={styles.copyGrid}>
                <p>
                  The library began as a personal efficiency tool and became a shared resource for
                  teammates. It supported more consistent components, typography, and text sizes
                  across the applications our team worked on.
                </p>
                <p>
                  The project taught me how reusable systems can improve both individual workflows
                  and team collaboration while keeping design and development connected. The Figma
                  library was used across the applications our team worked on; I did not code the
                  production Angular components.
                </p>
              </div>
              <div className={styles.next}>
                <Link className={utilityStyles.textLink} href="/work">
                  Back to selected work <ArrowLeft size={16} />
                </Link>
                <Link className={utilityStyles.textLink} href="/contact">
                  Discuss a project <ArrowDown size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

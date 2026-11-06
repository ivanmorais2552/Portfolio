import { FultonImage } from './FultonImage';
import { FultonReveal } from './FultonReveal';
import utilityStyles from '@/styles/Utility.module.css';
import styles from '../FultonPage.module.css';

export function FultonPrinting() {
  return (
    <FultonReveal>
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <p className={utilityStyles.eyebrow}>05 / Printing experience</p>
        </div>
        <div className={styles.sectionContent}>
          <h2>
            Operational clarity
            <br />
            <em>before conference day.</em>
          </h2>
          <p className={styles.lead}>
            Printing management brings poster status, printer assignment, and issue reporting into
            one operational workflow.
          </p>
          <figure className={styles.imageWide}>
            <FultonImage
              src="/images/fulton/printing/Printing%402x.png"
              alt="Fulton printing management screen"
              width={3840}
              height={2462}
              crop={{ aspectRatio: '16 / 9', objectPosition: '50% 18%', scale: 1.05 }}
            />
            <figcaption>Printing management · original export</figcaption>
          </figure>
          <div className={`${styles.imagePair} ${styles.imagePairSmall}`}>
            <figure>
              <FultonImage
                src="/images/fulton/printing/Print%20Modal%402x.png"
                alt="Fulton print modal"
                width={3600}
                height={2000}
              />
              <figcaption>Print action · supporting export</figcaption>
            </figure>
            <figure>
              <FultonImage
                src="/images/fulton/printing/Manage%20Printers%402x.png"
                alt="Fulton printer management screen"
                width={3840}
                height={1712}
                crop={{ aspectRatio: '16 / 9', objectPosition: '50% 20%', scale: 1.04 }}
              />
              <figcaption>Printer management · supporting export</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </FultonReveal>
  );
}

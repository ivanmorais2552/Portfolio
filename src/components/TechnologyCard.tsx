import type { Technology } from '@/lib/technologies';
import { BorderBeam } from './BorderBeam';
import styles from './TechnologyCard.module.css';

export function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <div
      className={styles.card}
      style={{ '--brand-color': technology.brandColor } as React.CSSProperties}
      tabIndex={0}
      role="group"
      aria-label={technology.name}
    >
      <BorderBeam className={styles.technologyBeam} duration={6} phase="start" size={40} />
      <BorderBeam className={styles.technologyBeam} duration={6} phase="half" size={40} />
      <div className={styles.logo} aria-hidden="true">
        {technology.logoUrl ? (
          // Simple Icons are served as small, authentic SVGs from the CDN.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={technology.logoUrl} alt="" />
        ) : (
          <span>SQL</span>
        )}
      </div>
      <span className={styles.name}>{technology.name}</span>
    </div>
  );
}

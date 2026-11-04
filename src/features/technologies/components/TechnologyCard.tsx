import type { CSSProperties } from 'react';
import type { Technology } from '@/features/technologies/data/technologyCatalog';
import { BorderBeam } from '@/components/ui/BorderBeam';
import styles from './TechnologyCard.module.css';

type TechnologyCardProps = {
  technology: Technology;
};

type TechnologyCardStyle = CSSProperties & {
  '--brand-color': string;
};

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const style: TechnologyCardStyle = { '--brand-color': technology.brandColor };
  return (
    <div
      className={styles.card}
      style={style}
      tabIndex={0}
      role="group"
      aria-label={technology.name}
    >
      <BorderBeam className={styles.technologyBeam} duration={6} phase="start" size={40} />
      <BorderBeam className={styles.technologyBeam} duration={6} phase="half" size={40} />
      <div className={styles.logo} aria-hidden="true">
        {technology.logoUrl ? (
          // Technology logos are served as small, authentic SVGs from the CDN.
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

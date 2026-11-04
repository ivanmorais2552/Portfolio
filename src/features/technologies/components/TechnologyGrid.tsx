import { technologyGroups } from '../data/technologyCatalog';
import { TechnologyCard } from './TechnologyCard';
import styles from './TechnologyGrid.module.css';

export function TechnologyGrid() {
  return (
    <div className={styles.technologyGrid}>
      {technologyGroups.map((group) => (
        <div className={styles.technologyGroup} key={group.label}>
          <h3>{group.label}</h3>
          <div className={styles.technologyCards}>
            {group.technologies.map((technology) => (
              <TechnologyCard technology={technology} key={technology.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import { ProjectImage } from '@/components/ui/ProjectImage';
import { designSystemGroups } from '../data/designSystemContent';
import styles from '../DesignSystemPage.module.css';

export function LibraryGallery() {
  return (
    <div className={styles.gallery}>
      {designSystemGroups.map((group) => (
        <section className={styles.assetGroup} key={group.id} aria-labelledby={`${group.id}-title`}>
          <div className={styles.galleryHeader}>
            <h3 id={`${group.id}-title`}>{group.label}</h3>
            <p>{group.description}</p>
          </div>
          <div
            className={`${styles.assetGrid} ${
              group.id === 'actions'
                ? styles.actionsGrid
                : group.id === 'inputs-selection'
                  ? styles.inputsGrid
                  : styles.navigationGrid
            }`}
          >
            {group.assets.map((asset) => (
              <article className={styles.assetCard} key={asset.id}>
                <ProjectImage
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  crop={asset.crop}
                  expand
                  caption={`${asset.caption} · original Figma export`}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

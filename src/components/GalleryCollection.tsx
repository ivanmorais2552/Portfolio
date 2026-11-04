import type { PersonalProjectCollection } from '@/lib/personal-projects';
import utilityStyles from '@/styles/Utility.module.css';
import { GalleryItem } from './GalleryItem';
import styles from './GalleryCollection.module.css';

export function GalleryCollection({
  collection,
  onOpen,
}: {
  collection: PersonalProjectCollection;
  onOpen: (collection: PersonalProjectCollection, index: number) => void;
}) {
  return (
    <section className={styles.collection} aria-labelledby={`${collection.id}-title`}>
      <div className={styles.header}>
        <div>
          <p className={utilityStyles.eyebrow}>{collection.categoryLabel}</p>
          <h2 id={`${collection.id}-title`}>{collection.title}</h2>
        </div>
        <p>{collection.description}</p>
      </div>
      <div className={styles.grid}>
        {collection.images.map((image, index) => (
          <GalleryItem
            image={image}
            index={index}
            key={image.src}
            onOpen={(imageIndex) => onOpen(collection, imageIndex)}
          />
        ))}
      </div>
    </section>
  );
}

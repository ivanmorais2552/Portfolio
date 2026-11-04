import Image from 'next/image';
import type { GalleryImage } from '@/features/personal-projects/data/personalProjectCollections';
import styles from './GalleryItem.module.css';

type GalleryItemProps = {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
};

export function GalleryItem({ image, index, onOpen }: GalleryItemProps) {
  return (
    <button
      className={`${styles.item} ${styles[image.layout]}`}
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Open image: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
      />
      <span className={styles.openHint}>View image</span>
    </button>
  );
}

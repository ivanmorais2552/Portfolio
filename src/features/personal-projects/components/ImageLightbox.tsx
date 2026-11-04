'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import type { GalleryImage } from '@/features/personal-projects/data/personalProjectCollections';
import styles from './ImageLightbox.module.css';

type ImageLightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ImageLightbox({ images, index, onClose, onPrevious, onNext }: ImageLightboxProps) {
  const image = images[index];

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div className={styles.viewer} onClick={(event) => event.stopPropagation()}>
        <div className={styles.toolbar}>
          <p>
            {index + 1} / {images.length}
          </p>
          <button type="button" onClick={onClose} aria-label="Close image viewer">
            <X size={20} />
          </button>
        </div>
        <div className={styles.imageFrame}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="90vw"
            priority
          />
        </div>
        <div className={styles.controls}>
          <button type="button" onClick={onPrevious} aria-label="Previous image">
            <ArrowLeft size={18} /> Previous
          </button>
          <button type="button" onClick={onNext} aria-label="Next image">
            Next <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { personalProjectCollections } from '../data/personalProjectCollections';
import { useGalleryLightbox } from '../hooks/useGalleryLightbox';
import { CategoryFilter, type GalleryFilter } from './CategoryFilter';
import { GalleryCollection } from './GalleryCollection';
import { ImageLightbox } from './ImageLightbox';
import styles from './PersonalProjectsGallery.module.css';

export function PersonalProjectsGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const { lightbox, open, close, previous, next } = useGalleryLightbox();
  const collections = personalProjectCollections.filter(
    (collection) => filter === 'all' || collection.categories.includes(filter),
  );

  return (
    <>
      <div className={styles.toolbar}>
        <p>06 collections</p>
        <CategoryFilter activeFilter={filter} onChange={setFilter} />
      </div>
      <div>
        {collections.map((collection) => (
          <GalleryCollection collection={collection} key={collection.id} onOpen={open} />
        ))}
      </div>
      {lightbox && (
        <ImageLightbox
          images={lightbox.collection.images}
          index={lightbox.index}
          onClose={close}
          onPrevious={previous}
          onNext={next}
        />
      )}
    </>
  );
}

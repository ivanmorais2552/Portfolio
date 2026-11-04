'use client';

import { useEffect, useMemo, useState } from 'react';
import type { PersonalProjectCollection } from '@/lib/personal-projects';
import { personalProjectCollections } from '@/lib/personal-projects';
import { CategoryFilter, type GalleryFilter } from './CategoryFilter';
import { GalleryCollection } from './GalleryCollection';
import { ImageLightbox } from './ImageLightbox';
import styles from './PersonalProjectsGallery.module.css';

export function PersonalProjectsGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [lightbox, setLightbox] = useState<{ collection: PersonalProjectCollection; index: number } | null>(null);
  const collections = useMemo(
    () =>
      personalProjectCollections.filter(
        (collection) => filter === 'all' || collection.categories.includes(filter),
      ),
    [filter],
  );

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowLeft') {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index: (current.index - 1 + current.collection.images.length) % current.collection.images.length,
              }
            : null,
        );
      }
      if (event.key === 'ArrowRight') {
        setLightbox((current) =>
          current
            ? { ...current, index: (current.index + 1) % current.collection.images.length }
            : null,
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <div className={styles.toolbar}>
        <p>Browse by medium</p>
        <CategoryFilter activeFilter={filter} onChange={setFilter} />
      </div>
      <div>
        {collections.map((collection) => (
          <GalleryCollection
            collection={collection}
            key={collection.id}
            onOpen={(nextCollection, index) => setLightbox({ collection: nextCollection, index })}
          />
        ))}
      </div>
      {lightbox && (
        <ImageLightbox
          images={lightbox.collection.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onPrevious={() =>
            setLightbox((current) =>
              current
                ? {
                    ...current,
                    index:
                      (current.index - 1 + current.collection.images.length) % current.collection.images.length,
                  }
                : null,
            )
          }
          onNext={() =>
            setLightbox((current) =>
              current
                ? { ...current, index: (current.index + 1) % current.collection.images.length }
                : null,
            )
          }
        />
      )}
    </>
  );
}

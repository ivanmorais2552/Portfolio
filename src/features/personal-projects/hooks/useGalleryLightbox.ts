import { useCallback, useEffect, useState } from 'react';
import type { PersonalProjectCollection } from '../data/personalProjectCollections';

type GalleryLightboxState = {
  collection: PersonalProjectCollection;
  index: number;
};

export function useGalleryLightbox() {
  const [lightbox, setLightbox] = useState<GalleryLightboxState | null>(null);
  const isOpen = lightbox !== null;

  const open = useCallback((collection: PersonalProjectCollection, index: number) => {
    setLightbox({ collection, index });
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  const navigate = useCallback((direction: -1 | 1) => {
    setLightbox((current) => {
      if (!current) return null;
      const count = current.collection.images.length;
      return { ...current, index: (current.index + direction + count) % count };
    });
  }, []);

  const previous = useCallback(() => navigate(-1), [navigate]);
  const next = useCallback(() => navigate(1), [navigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close, previous, next]);

  return { lightbox, open, close, previous, next };
}

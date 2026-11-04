'use client';

import type { PersonalProjectCategory } from '@/features/personal-projects/data/personalProjectCollections';
import styles from './CategoryFilter.module.css';

export type GalleryFilter = 'all' | PersonalProjectCategory;

const filters: Array<{ id: GalleryFilter; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'graphics', label: 'Graphics' },
];

type CategoryFilterProps = {
  activeFilter: GalleryFilter;
  onChange: (filter: GalleryFilter) => void;
};

export function CategoryFilter({ activeFilter, onChange }: CategoryFilterProps) {
  return (
    <div className={styles.filter} aria-label="Filter personal projects" role="group">
      {filters.map((filter) => (
        <button
          className={activeFilter === filter.id ? styles.active : undefined}
          key={filter.id}
          type="button"
          aria-pressed={activeFilter === filter.id}
          onClick={() => onChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

'use client';

import type { PersonalProjectCategory } from '@/lib/personal-projects';
import styles from './CategoryFilter.module.css';

export type GalleryFilter = 'all' | PersonalProjectCategory;

const filters: Array<{ id: GalleryFilter; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'graphics', label: 'Graphics' },
];

export function CategoryFilter({
  activeFilter,
  onChange,
}: {
  activeFilter: GalleryFilter;
  onChange: (filter: GalleryFilter) => void;
}) {
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

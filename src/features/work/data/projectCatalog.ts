import type { ProjectImageCrop } from '@/components/ui/ProjectImage';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  discipline: string;
  featured?: boolean;
  accent: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageCrop?: ProjectImageCrop;
};

export const projects: Project[] = [
  {
    slug: 'fulton',
    title: 'Fulton Conference Management',
    summary: 'Redesigning conference operations across judging, printing, and administration.',
    role: 'Lead UX/UI Designer',
    year: '2026',
    discipline: 'Product design · 38 screens',
    featured: true,
    accent: 'emerald',
    image: '/images/fulton/admin/Home%20Dashboard.png',
    imageAlt: 'Fulton Conference Management admin home dashboard',
    imageWidth: 3840,
    imageHeight: 2718,
    imageCrop: {
      aspectRatio: '3840 / 2718',
      objectPosition: '50% 50%',
      scale: 1,
    },
  },
  {
    slug: 'research-grants',
    title: 'Research Grants Management',
    summary:
      'A unified platform for faculty, judges, and administrators to manage research grants.',
    role: 'Sole UX/UI Designer',
    year: '2026',
    discipline: 'Product design · 31 screens',
    accent: 'sand',
    image: '/images/grants/01-grants-home.png',
    imageAlt: 'Research Grants Management grants home screen',
    imageWidth: 3840,
    imageHeight: 5800,
    imageCrop: {
      aspectRatio: '16 / 10',
      objectPosition: '50% 14%',
      scale: 1.08,
      responsive: {
        tablet: { aspectRatio: '16 / 10', objectPosition: '50% 13%', scale: 1.06 },
        mobile: { aspectRatio: '4 / 3', objectPosition: '50% 12%', scale: 1.1 },
      },
    },
  },
  {
    slug: 'conference-check-in',
    title: 'Conference Check-In',
    summary: 'A case study placeholder for making an in-person welcome feel simple.',
    role: 'Product designer',
    year: '2026',
    discipline: 'Product design',
    accent: 'violet',
  },
  {
    slug: 'byu-design-system',
    title: 'BYU Design System',
    summary: 'A growing library of reusable patterns, components, and shared decisions.',
    role: 'Product designer',
    year: '2026',
    discipline: 'Design systems',
    accent: 'blue',
  },
];

export const personalProjectsProject: Project = {
  slug: 'personal-projects',
  title: 'Personal Projects',
  summary: 'Digital products, visual identities, and ideas made for fun.',
  role: 'Independent work',
  year: '2026',
  discipline: 'Independent work · Creative explorations',
  accent: 'violet',
  image: '/images/personal-projects/nike-travis-scott/01-la-flame-hero.png',
  imageAlt: 'Travis Scott-inspired Nike campaign concept',
  imageWidth: 1920,
  imageHeight: 1243,
  imageCrop: {
    aspectRatio: '4 / 3',
    objectPosition: '50% 50%',
    scale: 1,
  },
};

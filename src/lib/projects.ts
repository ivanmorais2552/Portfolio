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
  },
  {
    slug: 'research-grants-management',
    title: 'Research Grants Management',
    summary: 'A case study placeholder for a workflow shaped by people, process, and policy.',
    role: 'Product designer',
    year: '2026',
    discipline: 'Product design',
    accent: 'sand',
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

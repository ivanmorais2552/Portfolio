export type Technology = {
  name: string;
  logoUrl?: string;
  brandColor: string;
};

export type TechnologyGroup = {
  label: string;
  technologies: Technology[];
};

const devIcon = (slug: string, brandColor: string): Technology => ({
  name: slug,
  logoUrl: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`,
  brandColor,
});

export const technologyGroups: TechnologyGroup[] = [
  {
    label: 'Frontend',
    technologies: [
      { ...devIcon('html5', '#E34F26'), name: 'HTML5' },
      { ...devIcon('css3', '#1572B6'), name: 'CSS3' },
      { ...devIcon('javascript', '#F7DF1E'), name: 'JavaScript' },
      { ...devIcon('typescript', '#3178C6'), name: 'TypeScript' },
      { ...devIcon('angularjs', '#DD0031'), name: 'Angular' },
    ],
  },
  {
    label: 'Backend & databases',
    technologies: [
      { ...devIcon('nodejs', '#5FA04E'), name: 'Node.js' },
      { name: 'SQL', brandColor: '#22C55E' },
      { ...devIcon('postgresql', '#4169E1'), name: 'PostgreSQL' },
      { ...devIcon('prisma', '#5A67D8'), name: 'Prisma' },
      { ...devIcon('python', '#3776AB'), name: 'Python' },
    ],
  },
  {
    label: 'Tools & platforms',
    technologies: [
      { ...devIcon('figma', '#F24E1E'), name: 'Figma' },
      { ...devIcon('git', '#F05032'), name: 'Git' },
      { ...devIcon('github', '#F0F6FC'), name: 'GitHub' },
      {
        name: 'AWS',
        logoUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg',
        brandColor: '#FF9900',
      },
    ],
  },
];

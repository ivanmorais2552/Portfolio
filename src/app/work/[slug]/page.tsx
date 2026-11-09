import { notFound } from 'next/navigation';
import { FultonPage } from '@/features/fulton/FultonPage';
import { ProjectDetailPage } from '@/features/work/ProjectDetailPage';
import { ResearchGrantsPage } from '@/features/work/ResearchGrantsPage';
import { projects } from '@/features/work/data/projectCatalog';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (project.slug === 'fulton') return <FultonPage />;
  if (project.slug === 'research-grants') return <ResearchGrantsPage />;
  if (project.status === 'upcoming') return <ProjectDetailPage project={project} />;
  notFound();
}

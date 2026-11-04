import { notFound } from 'next/navigation';
import { FultonCaseStudy } from '@/components/fulton-case-study';
import { projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  if (project.slug === 'fulton') return <FultonCaseStudy />;
  return (
    <main>
      <section className="case-hero page-container">
        <p className="eyebrow">Case study / placeholder</p>
        <h1>{project.title}</h1>
        <p className="case-hero-summary">{project.summary}</p>
        <div className="case-meta-grid">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>Discipline</span>
            <strong>{project.discipline}</strong>
          </div>
        </div>
      </section>
      <section className="case-section page-container">
        <PlaceholderProject />
      </section>
    </main>
  );
}

function PlaceholderProject() {
  return (
    <div className="placeholder-panel" role="img" aria-label="Project asset placeholder">
      <span className="placeholder-cross" />
      <p>Additional project details and original assets will be added when available.</p>
    </div>
  );
}

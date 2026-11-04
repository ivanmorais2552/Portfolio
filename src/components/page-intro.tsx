export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="page-intro page-container">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {description && <p className="page-intro-description">{description}</p>}
    </section>
  );
}

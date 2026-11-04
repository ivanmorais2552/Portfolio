export function PlaceholderPanel({ label = "Project asset placeholder" }: { label?: string }) {
  return <div className="placeholder-panel" role="img" aria-label={label}><span className="placeholder-cross" /><p>{label}</p></div>;
}

import styles from './PlaceholderPanel.module.css';

export function PlaceholderPanel({ label = 'Project asset placeholder' }: { label?: string }) {
  return (
    <div className={styles.panel} role="img" aria-label={label}>
      <span className={styles.cross} />
      <p>{label}</p>
    </div>
  );
}

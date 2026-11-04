import styles from './PlaceholderPanel.module.css';

type PlaceholderPanelProps = {
  label?: string;
};

export function PlaceholderPanel({ label = 'Project asset placeholder' }: PlaceholderPanelProps) {
  return (
    <div className={styles.panel} role="img" aria-label={label}>
      <span className={styles.cross} />
      <p>{label}</p>
    </div>
  );
}

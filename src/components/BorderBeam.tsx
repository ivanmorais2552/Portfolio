import type { CSSProperties } from 'react';
import styles from './BorderBeam.module.css';

type BorderBeamProps = {
  className?: string;
  duration?: number;
  phase?: 'start' | 'half';
  size?: number;
};

export function BorderBeam({
  className = '',
  duration = 6,
  phase = 'start',
  size = 90,
}: BorderBeamProps) {
  const style = {
    '--beam-duration': `${duration}s`,
    '--beam-size': `${size}px`,
  } as CSSProperties;

  return (
    <span className={`${styles.beam} ${className}`} style={style} aria-hidden="true">
      <span className={`${styles.beamHead} ${phase === 'half' ? styles.phaseHalf : ''}`} />
    </span>
  );
}

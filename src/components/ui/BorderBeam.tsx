import type { CSSProperties } from 'react';
import styles from './BorderBeam.module.css';

type BorderBeamProps = {
  className?: string;
  duration?: number;
  phase?: 'start' | 'half';
  size?: number;
};

type BorderBeamStyle = CSSProperties & {
  '--beam-duration': string;
  '--beam-size': string;
};

export function BorderBeam({
  className = '',
  duration = 6,
  phase = 'start',
  size = 90,
}: BorderBeamProps) {
  const style: BorderBeamStyle = {
    '--beam-duration': `${duration}s`,
    '--beam-size': `${size}px`,
  };

  return (
    <span className={`${styles.beam} ${className}`} style={style} aria-hidden="true">
      <span className={`${styles.beamHead} ${phase === 'half' ? styles.phaseHalf : ''}`} />
    </span>
  );
}

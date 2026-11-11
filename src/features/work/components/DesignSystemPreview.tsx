import { ProjectImage } from '@/components/ui/ProjectImage';
import hoverStyles from './ProjectHover.module.css';
import styles from './DesignSystemPreview.module.css';

export function DesignSystemPreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <ProjectImage
        className={`${styles.overview} ${hoverStyles.image}`}
        src="/images/byu-design-system/00-component-overview-light-dark.png"
        alt=""
        width={1930}
        height={1242}
        crop={{ aspectRatio: '16 / 10', objectPosition: '50% 50%' }}
        priority
        sizes="(max-width: 700px) 100vw, 50vw"
      />
    </div>
  );
}

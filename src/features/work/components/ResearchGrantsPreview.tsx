import { ProjectImage } from '@/components/ui/ProjectImage';
import layeredCoverStyles from '@/components/ui/LayeredProjectCover.module.css';
import styles from './ResearchGrantsPreview.module.css';

const grantCoverLayers = [
  {
    className: styles.home,
    src: '/images/grants/01-grants-home.png',
    alt: 'Research Grants home screen',
    width: 3840,
    height: 5800,
  },
  {
    className: styles.reviewer,
    src: '/images/grants/05-reviewer-dashboard.png',
    alt: 'Research Grants reviewer dashboard',
    width: 3840,
    height: 2814,
  },
  {
    className: styles.admin,
    src: '/images/grants/10-admin-application-management.png',
    alt: 'Research Grants admin application management screen',
    width: 2526,
    height: 2638,
  },
];

export function ResearchGrantsPreview() {
  return (
    <div className={styles.cover}>
      {grantCoverLayers.map((layer) => (
        <ProjectImage
          className={`${styles.layer} ${layeredCoverStyles.image} ${layer.className}`}
          key={layer.src}
          src={layer.src}
          alt=""
          width={layer.width}
          height={layer.height}
          sizes="(max-width: 700px) 35vw, 18vw"
        />
      ))}
    </div>
  );
}

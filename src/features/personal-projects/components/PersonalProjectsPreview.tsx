import { ProjectImage } from '@/components/ui/ProjectImage';
import layeredCoverStyles from '@/components/ui/LayeredProjectCover.module.css';
import { personalProjectPreviewImages } from '@/features/personal-projects/data/personalProjectCollections';
import styles from './PersonalProjectsPreview.module.css';

const imageLayers = [styles.image1, styles.image2, styles.image3];

export function PersonalProjectsPreview() {
  return (
    <div className={styles.cover}>
      {personalProjectPreviewImages.map(({ image, crop }, index) => {
        const imageClass = imageLayers[index];

        return (
          <ProjectImage
            className={`${styles.layer} ${layeredCoverStyles.image} ${imageClass}`}
            key={image.src}
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            crop={crop}
            sizes="(max-width: 700px) 46vw, 24vw"
          />
        );
      })}
    </div>
  );
}

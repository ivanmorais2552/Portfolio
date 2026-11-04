import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { personalProjectPreviewImages } from '@/features/personal-projects/data/personalProjectCollections';
import styles from './PersonalProjectsPreview.module.css';

export function PersonalProjectsPreview() {
  return (
    <Link className={styles.card} href="/work/personal-projects">
      <div className={styles.visual} aria-hidden="true">
        {personalProjectPreviewImages.map((image, index) => (
          <Image
            className={styles[`image${index + 1}`]}
            key={image.src}
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            sizes="(max-width: 700px) 30vw, 20vw"
          />
        ))}
      </div>
      <div className={styles.info}>
        <div>
          <p>Independent work / Creative explorations</p>
          <h2>Personal Projects</h2>
          <span>Digital products, visual identities, and ideas made for fun.</span>
        </div>
        <ArrowUpRight size={20} strokeWidth={1.6} />
      </div>
    </Link>
  );
}

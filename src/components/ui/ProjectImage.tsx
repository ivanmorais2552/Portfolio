'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import styles from './ProjectImage.module.css';

export type ProjectImageCrop = {
  aspectRatio?: string;
  objectPosition?: string;
  scale?: number;
  focalPoint?: { x: number; y: number };
  responsive?: {
    tablet?: Omit<ProjectImageCrop, 'responsive'>;
    mobile?: Omit<ProjectImageCrop, 'responsive'>;
  };
};

type ProjectImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  crop?: ProjectImageCrop;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  expand?: boolean;
  wrapper?: 'figure' | 'div';
};

type ProjectImageStyle = CSSProperties & {
  '--project-image-aspect': string;
  '--project-image-position': string;
  '--project-image-scale': number;
  '--project-image-tablet-aspect': string;
  '--project-image-tablet-position': string;
  '--project-image-tablet-scale': number;
  '--project-image-mobile-aspect': string;
  '--project-image-mobile-position': string;
  '--project-image-mobile-scale': number;
};

function getPosition(crop?: ProjectImageCrop) {
  if (crop?.objectPosition) return crop.objectPosition;
  if (crop?.focalPoint) return `${crop.focalPoint.x * 100}% ${crop.focalPoint.y * 100}%`;
  return '50% 50%';
}

function getAspectRatio(crop: ProjectImageCrop | undefined, width: number, height: number) {
  return crop?.aspectRatio ?? `${width} / ${height}`;
}

function getStyle(crop: ProjectImageCrop | undefined, width: number, height: number) {
  const tablet = crop?.responsive?.tablet;
  const mobile = crop?.responsive?.mobile;
  return {
    '--project-image-aspect': getAspectRatio(crop, width, height),
    '--project-image-position': getPosition(crop),
    '--project-image-scale': crop?.scale ?? 1,
    '--project-image-tablet-aspect': getAspectRatio(tablet, width, height),
    '--project-image-tablet-position': getPosition(tablet),
    '--project-image-tablet-scale': tablet?.scale ?? crop?.scale ?? 1,
    '--project-image-mobile-aspect': getAspectRatio(mobile, width, height),
    '--project-image-mobile-position': getPosition(mobile),
    '--project-image-mobile-scale': mobile?.scale ?? tablet?.scale ?? crop?.scale ?? 1,
  } satisfies ProjectImageStyle;
}

export function ProjectImage({
  src,
  alt,
  width,
  height,
  crop,
  caption,
  className = '',
  sizes = '100vw',
  priority = false,
  expand = false,
  wrapper = 'figure',
}: ProjectImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const style = getStyle(crop, width, height);

  const Wrapper = wrapper;

  return (
    <Wrapper className={`${styles.figure} ${className}`}>
      <div className={styles.frame} style={style as CSSProperties}>
        <Image
          className={styles.image}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
        />
        {expand && (
          <button
            className={styles.expandButton}
            type="button"
            aria-label={`Expand image: ${alt}`}
            onClick={() => setIsExpanded(true)}
          />
        )}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
      {expand && isExpanded && (
        <div
          className={styles.dialogBackdrop}
          role="presentation"
          onClick={() => setIsExpanded(false)}
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} expanded view`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.dialogToolbar}>
              <p>{alt}</p>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="Close image viewer"
              >
                Close
              </button>
            </div>
            <div className={styles.dialogImage}>
              <Image src={src} alt={alt} width={width} height={height} sizes="90vw" priority />
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

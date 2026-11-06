import { ProjectImage, type ProjectImageCrop } from '@/components/ui/ProjectImage';

type FultonImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  crop?: ProjectImageCrop;
};

export function FultonImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  crop,
}: FultonImageProps) {
  return (
    <ProjectImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      crop={crop}
      priority={priority}
      sizes="(max-width: 700px) 100vw, 1200px"
      wrapper="div"
    />
  );
}

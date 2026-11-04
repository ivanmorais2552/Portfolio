import Image from "next/image";

type FultonImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

export function FultonImage({ src, alt, width, height, priority = false, className = "" }: FultonImageProps) {
  return <Image className={className} src={src} alt={alt} width={width} height={height} priority={priority} sizes="(max-width: 700px) 100vw, 1200px" />;
}

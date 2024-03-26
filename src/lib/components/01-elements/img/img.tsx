import { ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../typography/typography';

export type ImgProps = {
  src?: string;
  alt?: string;
  description?: string;
  bgColor?: 'dark' | 'light';
  renderedImageComponent?: ReactNode;
};

export default function Img({
  src,
  alt = '',
  description,
  bgColor = 'light',
  renderedImageComponent,
}: ImgProps) {
  const renderedImage = renderedImageComponent ? (
    renderedImageComponent
  ) : src ? (
    <img src={src} alt={alt} />
  ) : null;

  const renderedCaption = description && (
    <figcaption>
      <Typography
        variant="body-4"
        className={cn(bgColor === 'dark' ? 'text-azure' : 'text-black')}
      >
        {description}
      </Typography>
    </figcaption>
  );

  return (
    <figure className="relative">
      {renderedImage}
      {renderedCaption}
    </figure>
  );
}

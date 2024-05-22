import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Typography from '../typography/typography';

export interface ImgProps extends ComponentPropsWithoutRef<'figure'> {
  src?: string;
  alt?: string;
  description?: string | ReactNode;
  bgColor?: 'dark' | 'light';
  renderedImageComponent?: ReactNode;
}

export default function Img({
  src,
  alt = '',
  description,
  bgColor = 'light',
  renderedImageComponent,
  ...props
}: ImgProps) {
  const renderedImage = renderedImageComponent ? (
    renderedImageComponent
  ) : src ? (
    <img src={src} alt={alt} />
  ) : null;

  const renderedCaption = description && (
    <Typography
      component="figcaption"
      variant="body-4"
      className={cn(bgColor === 'dark' ? 'text-azure' : 'text-black')}>
      {description}
    </Typography>
  );

  return (
    <figure {...props}>
      {renderedImage}
      {renderedCaption}
    </figure>
  );
}

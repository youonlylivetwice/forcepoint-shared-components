import { ReactNode } from 'react';
import Typography from '../typography/typography';
import { cn } from '../../../utils/tailwind-merge';

type ImgProps = {
  src: string;
  description: string;
  bgColor?: 'dark' | 'light';
  renderedImageComponent?: ReactNode;
};

export default function Img({
  src,
  description,
  bgColor = 'light',
  renderedImageComponent,
}: ImgProps) {
  return renderedImageComponent ? (
    renderedImageComponent
  ) : (
    <figure>
      <img src={src} alt={description} />
      {description !== '' && (
        <figcaption>
          <Typography
            variant="body-4"
            className={cn(bgColor === 'dark' ? 'text-azure' : 'text-black')}
          >
            {description}
          </Typography>
        </figcaption>
      )}
    </figure>
  );
}

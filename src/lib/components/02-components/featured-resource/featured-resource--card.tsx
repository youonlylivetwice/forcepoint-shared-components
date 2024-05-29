import { ReactNode } from 'react';
import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';
import Button from '../../01-elements/button/button';

export type ResourceImageDetails = {
  alt: string;
  height?: string | number;
  src: string;
  width?: string | number;
};

export type FeaturedResourceCardProps = {
  buttonLabel?: string;
  image?: ResourceImageDetails;
  renderedImageComponent?: ReactNode;
  title?: string;
  url?: string;
  id?: string;
};

export default function FeaturedResourceCard({
  buttonLabel,
  image,
  renderedImageComponent,
  title,
  url,
  id,
}: FeaturedResourceCardProps) {
  const renderedImage = renderedImageComponent ? (
    renderedImageComponent
  ) : image ? (
    <img
      className="h-full w-full object-cover object-center"
      {...(image.height && { height: image.height })}
      {...(image.width && { width: image.width })}
      src={image.src}
      alt={image.alt}
    />
  ) : null;

  return (
    <div id={id && `featured-resource-card-${id}`} className="md:white rounded-m max-md:border-2 max-md:border-azure md:max-w-[480px] md:bg-azure">
      {renderedImage && (
        <div className="overflow-hidden rounded-m max-md:hidden md:max-h-[240px]">
          {renderedImage}
        </div>
      )}
      <div className="flex flex-col gap-md p-md md:gap-lg md:p-lg">
        {title && (
          <span className="text-h3 font-[600] text-black md:text-h4">
            {title}
          </span>
        )}
        <Button
          as="link"
          color="blue"
          href={url}
          endIcon={<ArrowRight />}
          className="justify-center md:w-fit"
          animated
        >
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

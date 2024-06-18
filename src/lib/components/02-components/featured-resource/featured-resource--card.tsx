import { ComponentPropsWithoutRef, ReactNode } from 'react';
import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';
import { cn } from '../../../utils/tailwind-merge';
import {
  calculateBrightness,
  hexToRgb,
} from '../../00-tokens/color/color-shared';
import Button from '../../01-elements/button/button';

export type ResourceImageDetails = {
  alt: string;
  height?: string | number;
  src: string;
  width?: string | number;
};

export interface FeaturedResourceCardProps
  extends ComponentPropsWithoutRef<'div'> {
  buttonLabel?: string;
  image?: ResourceImageDetails;
  renderedImageComponent?: ReactNode;
  title?: string;
  url?: string;
  sectionBgColor?: string;
}

export default function FeaturedResourceCard({
  buttonLabel,
  image,
  renderedImageComponent,
  title,
  url,
  sectionBgColor,
  className,
  ...props
}: FeaturedResourceCardProps) {
  let isDarkMode = false;

  if (sectionBgColor) {
    const color = hexToRgb(sectionBgColor);
    const brightness = calculateBrightness(color);
    isDarkMode = brightness < 125;
  }

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
    <div
      {...props}
      className={cn(
        'rounded-m md:max-w-[480px]',
        {
          'border-2 border-azure': isDarkMode,
          'max-md:border-2 max-md:border-azure md:bg-azure': !isDarkMode,
        },
        className,
      )}>
      {renderedImage && (
        <div className="overflow-hidden rounded-m max-md:hidden md:max-h-[240px]">
          {renderedImage}
        </div>
      )}
      <div className="flex flex-col gap-md p-md md:gap-lg md:p-lg">
        {title && (
          <span
            className={cn('text-h3 font-[600] md:text-h4', {
              'text-white': isDarkMode,
              'text-black': !isDarkMode,
            })}>
            {title}
          </span>
        )}
        <Button
          as="link"
          color="blue"
          href={url}
          endIcon={<ArrowRight />}
          className="justify-center md:w-fit"
          animated>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

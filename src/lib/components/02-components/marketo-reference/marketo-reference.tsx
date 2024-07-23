import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';

export interface MarketoReferenceProps extends ComponentPropsWithoutRef<'div'> {
  marketoForm: ReactNode;
  image?: MarketoReferenceImageDetails;
  renderedImageComponent?: ReactNode;
  bgColor: MarketoReferenceColor;
  formStyle?: MarketoReferenceFormStyle;
  contentClassName?: string;
}

export type MarketoReferenceImageDetails = {
  alt: string;
  height?: string | number;
  src: string;
  width?: string | number;
};

export type MarketoReferenceColor = 'azure' | 'black' | 'navy' | 'white';

export type MarketoReferenceFormStyle =
  | 'none'
  | 'aside_contained_image_overflow_top'
  | 'aside_form_image_as_background'
  | 'centered_form_image_as_background';

const marketoReferenceColorStyles: Record<MarketoReferenceColor, string> = {
  azure: 'bg-azure text-navy',
  black: 'bg-black text-white',
  navy: 'bg-navy text-white',
  white: 'bg-white text-navy',
};

const marketoReferenceFormWrapperStyles: Record<
  MarketoReferenceFormStyle,
  string
> = {
  none: 'justify-center',
  aside_contained_image_overflow_top: 'md:grid md:grid-cols-2',
  aside_form_image_as_background: 'bg-cover bg-center',
  centered_form_image_as_background: 'justify-center bg-cover bg-center',
};

const marketoReferenceFormStyles: Record<MarketoReferenceFormStyle, string> = {
  none: 'mx-auto my-0 lg:px-0 lg:w-full',
  aside_contained_image_overflow_top: 'lg:w-full lg:px-lg',
  aside_form_image_as_background: '',
  centered_form_image_as_background: 'mx-auto my-0 lg:px-0',
};

export default function MarketoReference({
  marketoForm: renderedMarketoForm,
  image,
  renderedImageComponent,
  bgColor,
  formStyle: style = 'none',
  className,
  contentClassName,
  ...props
}: MarketoReferenceProps) {
  const formStyle = style ? style : 'none';
  const renderedImage =
    formStyle === 'aside_contained_image_overflow_top' &&
    (renderedImageComponent ? (
      renderedImageComponent
    ) : image ? (
      <img
        className={cn({
          'mx-auto my-0 md:max-w-md':
            formStyle === 'aside_contained_image_overflow_top',
        })}
        {...(image.height && { height: image.height })}
        {...(image.width && { width: image.width })}
        src={image.src}
        alt={image.alt}
      />
    ) : null);

  const isBgImageStyle =
    formStyle === 'aside_form_image_as_background' ||
    formStyle === 'centered_form_image_as_background';

  // Tailwind does not support dynamic background image URLs.
  const bgImageStyles: CSSProperties = isBgImageStyle
    ? {
        backgroundImage: `url(${image?.src})`,
      }
    : {};

  return (
    <div
      {...props}
      style={bgImageStyles}
      className={cn(
        marketoReferenceColorStyles[bgColor],
        {
          'bg-cover bg-no-repeat': isBgImageStyle,
        },
        className,
      )}>
      <div
        className={cn(
          'flex w-full',
          marketoReferenceFormWrapperStyles[formStyle],
          contentClassName,
        )}>
        {renderedImage && (
          <div className={cn('hidden md:block md:w-full')}>{renderedImage}</div>
        )}
        <div
          className={cn(
            'w-full px-md py-lg lg:px-lg lg:py-xl',
            marketoReferenceFormStyles[formStyle],
            {
              'lg:max-w-[540px]':
                formStyle !== 'aside_contained_image_overflow_top',
            },
          )}>
          {renderedMarketoForm}
        </div>
      </div>
    </div>
  );
}

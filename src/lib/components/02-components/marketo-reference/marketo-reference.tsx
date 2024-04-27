import { cn } from '../../../utils/tailwind-merge';

export type MarketoReferenceProps = {
  renderedMarketoForm: React.ReactNode;
  image?: MarketoReferenceImageDetails;
  renderedImageComponent?: React.ReactNode;
  bgColor: MarketoReferenceColor;
  formStyle?: MarketoReferenceFormStyle;
};

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

const marketoReferenceFormStyles: Record<MarketoReferenceFormStyle, string> = {
  none: 'flex justify-center',
  aside_contained_image_overflow_top: 'grid grid-cols-2',
  aside_form_image_as_background: 'flex',
  centered_form_image_as_background: 'flex justify-center',
};

const marketoReferenceImageStyles: Record<MarketoReferenceFormStyle, string> = {
  none: 'hidden',
  aside_contained_image_overflow_top: 'rounded-lg -mt-8',
  aside_form_image_as_background: 'rounded-lg',
  centered_form_image_as_background: 'rounded-lg',
};

export default function MarketoReference({
  renderedMarketoForm,
  image,
  renderedImageComponent,
  bgColor,
  formStyle = 'none',
}: MarketoReferenceProps) {
  const renderedImage =
    formStyle !== 'none' &&
    (renderedImageComponent ? (
      renderedImageComponent
    ) : image ? (
      <img
        className="h-full w-full object-cover object-center"
        {...(image.height && { height: image.height })}
        {...(image.width && { width: image.width })}
        src={image.src}
        alt={image.alt}
      />
    ) : null);

  return (
    <div
      className={cn(
        'w-full md:min-w-[300px]',
        marketoReferenceColorStyles[bgColor],
        marketoReferenceFormStyles[formStyle],
      )}
    >
      {renderedImage && (
        <div className={cn('w-full', marketoReferenceImageStyles[formStyle])}>
          {renderedImage}
        </div>
      )}
    </div>
  );
}

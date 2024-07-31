import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';
import { cn } from '../../../utils/tailwind-merge';
import Button, { ButtonColorVariant } from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';

export interface CtaBannerProps extends ComponentPropsWithoutRef<'div'> {
  eyebrow?: string;
  title?: string;
  renderedTitleComponent?: ReactNode;
  primaryButton?: CtaButtonDetails;
  buttonComponent?: ElementType;
  image?: CtaBannerImageDetails;
  renderedImageComponent?: ReactNode;
  backgroundImage?: CtaBannerImageDetails;
  imageComponent?: ElementType;
  theme: CtaBannerTheme;
  contentRight: boolean;
}

export type CtaButtonDetails = {
  title: string;
  url: string;
};

export type CtaBannerImageDetails = {
  alt: string;
  height?: string | number;
  src: string;
  width?: string | number;
};

export type CtaBannerTheme = 'azure' | 'black' | 'violette' | 'navy';

type CtaBannerColorSchema = {
  button: ButtonColorVariant;
  eyebrow: string;
  title: string;
  wrapper: string;
};

const colorSchema: { [key in CtaBannerTheme]: CtaBannerColorSchema } = {
  azure: {
    button: 'blue',
    eyebrow: 'text-violette',
    title: 'text-navy',
    wrapper: 'bg-azure',
  },
  black: {
    button: 'sandwisp',
    eyebrow: 'text-sandwisp',
    title: 'text-white',
    wrapper: 'bg-black',
  },
  violette: {
    button: 'sandwisp',
    eyebrow: 'text-sandwisp',
    title: 'text-white',
    wrapper: 'bg-violette',
  },
  navy: {
    button: 'white',
    eyebrow: 'text-sandwisp',
    title: 'text-white',
    wrapper: 'bg-navy',
  },
};

export default function CtaBanner({
  eyebrow,
  title,
  renderedTitleComponent,
  primaryButton,
  buttonComponent: ButtonElement = 'a',
  image,
  renderedImageComponent,
  backgroundImage,
  imageComponent: ImageElement = 'img',
  theme,
  className,
  contentRight = false,
}: CtaBannerProps) {
  const renderedTitle = renderedTitleComponent ? (
    renderedTitleComponent
  ) : title ? (
    <Typography className={colorSchema[theme].title} variant="h3">
      {title}
    </Typography>
  ) : null;

  const renderedPrimaryButton = primaryButton && (
    <Button
      animated
      as="link"
      href={primaryButton.url}
      component={ButtonElement}
      color={colorSchema[theme].button}
      className={cn(
        'mt-md w-full justify-center transition md:mt-0',
        contentRight
          ? 'px-10 py-sm text-body-3'
          : 'py-4 text-h4 md:min-w-[230px] lg:w-60',
      )}>
      {primaryButton.title}
    </Button>
  );

  const renderedImage = renderedImageComponent ? (
    renderedImageComponent
  ) : image ? (
    <ImageElement
      className="mx-auto h-full w-full object-contain"
      src={image.src}
      alt={image.alt}
      {...(image.width && { width: image.width })}
      {...(image.height && { height: image.height })}
    />
  ) : null;

  const bgImageStyles: CSSProperties = {};
  if (backgroundImage) {
    bgImageStyles.backgroundImage = `url(${backgroundImage.src})`;
  }

  return (
    <div
      style={bgImageStyles}
      className={cn(
        'bg-cover bg-center p-10',
        colorSchema[theme].wrapper,
        className,
      )}>
      <div
        className={cn('flex w-full flex-col md:flex-row', {
          'max-w-screen-lg md:mx-auto md:my-0 md:justify-center':
            renderedImage === null,
        })}>
        {renderedImage && (
          <div className="relative mb-5 aspect-[16/9] w-auto md:mb-0 md:mr-10 md:aspect-[1/1] md:w-[350px]">
            {renderedImage}
          </div>
        )}
        <div
          className={cn(
            'flex flex-col md:items-center',
            !contentRight ? 'md:flex-row' : 'py-20',
          )}>
          <div
            className={cn(
              contentRight ? 'mb-5 md:pl-[50%]' : 'max-w-screen-sm',
            )}>
            {eyebrow && (
              <span
                className={cn(
                  'mb-3 block text-h5 font-semibold uppercase',
                  colorSchema[theme].eyebrow,
                )}>
                {eyebrow}
              </span>
            )}
            {renderedTitle}
          </div>
          <div
            className={cn(
              contentRight ? 'self-start md:pl-[50%]' : 'md:ml-10',
            )}>
            {renderedPrimaryButton}
          </div>
        </div>
      </div>
    </div>
  );
}

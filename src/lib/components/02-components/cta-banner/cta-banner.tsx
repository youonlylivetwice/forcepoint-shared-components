import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import { ArrowRightIcon } from '../../00-tokens/icons';
import Button, { ButtonColorVariant } from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';

export interface CtaBannerProps extends ComponentPropsWithoutRef<'div'> {
  eyebrow?: string;
  title?: string;
  renderedTitleComponent?: ReactNode;
  primaryButton?: CtaButtonDetails;
  secondaryButton?: CtaButtonDetails;
  buttonComponent?: ElementType;
  image?: CtaBannerImageDetails;
  renderedImageComponent?: ReactNode;
  imageComponent?: ElementType;
  theme: CtaBannerTheme;
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

export type CtaBannerColorSchema = {
  button: ButtonColorVariant;
  eyebrow: string;
  title: string;
  wrapper: string;
};

const colorSchema: { [key in CtaBannerTheme]: CtaBannerColorSchema } = {
  azure: {
    button: 'blue',
    eyebrow: 'violette',
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
  secondaryButton,
  buttonComponent: ButtonElement = 'a',
  image,
  renderedImageComponent,
  imageComponent: ImageElement = 'img',
  theme,
  className,
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
      endIcon={<ArrowRightIcon />}
      color={colorSchema[theme].button}
      className="mt-md w-full justify-center md:w-fit">
      {primaryButton.title}
    </Button>
  );

  const renderedSecondaryButton = secondaryButton && (
    <Button
      animated
      as="link"
      href={secondaryButton.url}
      component={ButtonElement}
      endIcon={<ArrowRightIcon />}
      color={colorSchema[theme].button}
      className="mt-md w-full justify-center md:w-fit">
      {secondaryButton.title}
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

  return (
    <div className={cn(className, colorSchema[theme].wrapper)}>
      {renderedImage && (
        <div className="h-24 w-full md:h-[160px]">{renderedImage}</div>
      )}
      <div>
        <div>
          {eyebrow && (
            <Typography className={colorSchema[theme].eyebrow} variant="h5">
              {eyebrow}
            </Typography>
          )}
          {renderedTitle}
        </div>
        {renderedPrimaryButton ||
          (renderedSecondaryButton && (
            <div>
              {renderedPrimaryButton}
              {renderedSecondaryButton}
            </div>
          ))}
      </div>
    </div>
  );
}

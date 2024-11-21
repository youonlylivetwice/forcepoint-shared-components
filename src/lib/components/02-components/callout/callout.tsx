import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import { ArrowRightIcon } from '../../00-tokens/icons';
import Button from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';

export type CalloutImageDetails = {
  alt: string;
  height?: string | number;
  src: string;
  width?: string | number;
};

export type CalloutLinkDetails = {
  title: string;
  url: string;
};

export interface CalloutProps extends ComponentPropsWithoutRef<'div'> {
  color?: CalloutColorVariant;
  content?: string;
  contentElement?: ElementType;
  eyebrow?: string;
  header?: string;
  image?: CalloutImageDetails;
  renderedImageComponent?: ReactNode;
  renderedContentComponent?: ReactNode;
  link?: CalloutLinkDetails;
  linkComponent?: ElementType;
  containerId?: string;
}

export type CalloutColorVariant = 'white' | 'black' | 'navy' | 'violette';

export type CalloutColorSchema = {
  button: 'navy' | 'viola' | 'white' | 'sandwisp' | 'blue';
  content: string;
  eyebrow: string;
  title: string;
  wrapper: string;
};

export const colorSchema: { [key in CalloutColorVariant]: CalloutColorSchema } =
  {
    white: {
      button: 'blue',
      content: 'text-grey',
      eyebrow: 'text-violette',
      title: 'text-black',
      wrapper: 'bg-white',
    },
    black: {
      button: 'sandwisp',
      content: 'text-azure',
      eyebrow: 'text-sandwisp',
      title: 'text-white',
      wrapper: 'bg-black',
    },
    navy: {
      button: 'sandwisp',
      content: 'text-azure',
      eyebrow: 'text-sandwisp',
      title: 'text-white',
      wrapper: 'bg-navy',
    },
    violette: {
      button: 'sandwisp',
      content: 'text-azure',
      eyebrow: 'text-sandwisp',
      title: 'text-white',
      wrapper: 'bg-violette',
    },
  };

export default function Callout({
  color = 'white',
  content,
  renderedContentComponent,
  eyebrow,
  header,
  image,
  link,
  linkComponent: LinkElement = 'a',
  renderedImageComponent,
  className,
  containerId,
  ...props
}: CalloutProps) {
  const renderedImage = renderedImageComponent ? (
    renderedImageComponent
  ) : image ? (
    <div className="aspect-[16/9] max-md:min-h-[284px] md:aspect-[1/1] md:max-w-[480px]">
      <img
        className="h-full w-full object-cover object-top md:mx-auto"
        src={image.src}
        alt={image.alt}
        {...(image.width && { width: image.width })}
        {...(image.height && { height: image.height })}
      />
    </div>
  ) : null;

  const renderedContent = renderedContentComponent ? (
    renderedContentComponent
  ) : content ? (
    <Typography variant="body-2" className={colorSchema[color].content}>
      {content}
    </Typography>
  ) : null;

  return (
    <div id={containerId} className={cn(colorSchema[color].wrapper, className)} {...props}>
      <div className="mx-auto flex max-w-screen-lg flex-col-reverse md:flex-row md:items-center md:gap-lg xl:gap-xl">
        {renderedImage}
        <div className="flex flex-1 flex-col gap-md p-lg">
          {eyebrow && (
            <span
              className={cn(
                'text-h5 font-semibold uppercase',
                colorSchema[color].eyebrow,
              )}>
              {eyebrow}
            </span>
          )}
          {header && (
            <Typography
              component="h2"
              variant="display"
              className={cn('font-semibold', colorSchema[color].title)}>
              {header}
            </Typography>
          )}

          {renderedContent}
          {link && (
            <Button
              animated
              as="link"
              href={link.url}
              component={LinkElement}
              endIcon={<ArrowRightIcon />}
              color={colorSchema[color].button}
              className="mt-md justify-center md:w-fit">
              {link.title}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

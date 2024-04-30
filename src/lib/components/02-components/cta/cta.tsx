import { cn } from '../../../utils/tailwind-merge';
import { ComponentPropsWithoutRef, ElementType } from 'react';
import ArrowRightIcon from '../../00-tokens/icons/arrow-right-icon';
import Button, { ButtonColorVariant } from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';

export type CtaLinkDetails = {
  title: string;
  url: string;
};

export interface CtaProps extends ComponentPropsWithoutRef<'div'> {
  header?: string;
  link?: CtaLinkDetails;
  linkComponent?: ElementType;
  theme?: CtaTheme;
}

export type CtaTheme = 'azure' | 'black' | 'navy' | 'warp' | 'gray' | 'glow';

export type CtaColorSchema = {
  button: ButtonColorVariant;
  header: string;
  wrapper?: string;
};

const colorSchema: { [key in CtaTheme]: CtaColorSchema } = {
  azure: {
    button: 'blue',
    header: 'text-navy',
    wrapper: 'bg-white',
  },
  black: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: 'bg-black',
  },
  navy: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: 'bg-navy',
  },
  warp: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: 'bg-cta-warp bg-cover bg-center',
  },
  gray: {
    button: 'blue',
    header: 'text-navy',
    wrapper: 'bg-cta-gray bg-cover bg-center',
  },
  glow: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: 'bg-cta-glow bg-cover bg-center',
  },
};

export default function CTA({
  className,
  header,
  link,
  linkComponent: LinkElement = 'a',
  theme = 'azure',
}: CtaProps) {
  return (
    <div className={cn('py-lg md:py-xl', colorSchema[theme].wrapper)}>
      <div
        className={cn(
          'mx-lg flex max-w-screen-xl flex-col items-center gap-y-lg text-center md:mx-auto',
          className,
        )}
      >
        {header && (
          <Typography
            variant="h1"
            component="h1"
            className={cn('font-semibold', colorSchema[theme].header)}
          >
            {header}
          </Typography>
        )}
        {link && (
          <Button
            animated
            as="link"
            href={link.url}
            component={LinkElement}
            endIcon={<ArrowRightIcon />}
            color={colorSchema[theme].button}
            className="mt-md w-full justify-center md:w-fit"
          >
            {link.title}
          </Button>
        )}
      </div>
    </div>
  );
}

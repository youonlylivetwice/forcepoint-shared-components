import { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import { ArrowRightIcon } from '../../00-tokens/icons';
import Button, { ButtonColorVariant } from '../../01-elements/button/button';
import Typography from '../../01-elements/typography/typography';

// Background images.
import GlowBgImage from '../../../assets/img/components/cta-glow.png';
import GrayBgImage from '../../../assets/img/components/cta-gray.png';
import WarpBgImage from '../../../assets/img/components/cta-warp.png';
import Link from '../../01-elements/link/link';

export type CtaLinkDetails = {
  title: string;
  url: string;
};

export interface CtaProps extends ComponentPropsWithoutRef<'div'> {
  header?: string;
  link?: CtaLinkDetails;
  linkComponent?: ElementType;
  theme?: CtaTheme;
  contentClassName?: string;
  showTextOnly?: boolean;
}

export type CtaTheme = 'azure' | 'black' | 'glow' | 'gray' | 'navy' | 'warp';

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
  glow: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: 'bg-cover bg-center',
  },
  gray: {
    button: 'blue',
    header: 'text-navy',
    wrapper: 'bg-cover bg-center',
  },
  navy: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: 'bg-navy',
  },
  warp: {
    button: 'sandwisp',
    header: 'text-white',
    wrapper: `bg-cover bg-center`,
  },
};

const bgImages: Record<string, string> = {
  glow: GlowBgImage,
  gray: GrayBgImage,
  warp: WarpBgImage,
};

export default function CTA({
  className,
  header,
  link,
  linkComponent: LinkElement = 'a',
  theme = 'azure',
  contentClassName,
  showTextOnly,
  ...props
}: CtaProps) {
  const cardStyles: CSSProperties = {};

  if (!colorSchema[theme]) {
    return null;
  }

  if (bgImages[theme]) {
    cardStyles.backgroundImage = `url(${bgImages[theme]})`;
  }
  const Component = showTextOnly ? Link : Button;
  return (
    <div
      {...props}
      className={cn(
        'px-md py-lg md:py-xl',
        colorSchema[theme].wrapper,
        className,
      )}
      style={cardStyles}>
      <div
        className={cn(
          'flex flex-col items-center gap-y-lg text-center',
          contentClassName,
        )}>
        {header && (
          <Typography
            variant="h1"
            component="h1"
            className={cn('font-semibold', colorSchema[theme].header)}>
            {header}
          </Typography>
        )}
        {link && (
          <Component
            animated
            as="link"
            href={link.url}
            component={LinkElement}
            endIcon={!showTextOnly && <ArrowRightIcon />}
            color={colorSchema[theme].button}
            className="mt-md w-full justify-center md:w-fit">
            {link.title}
          </Component>
        )}
      </div>
    </div>
  );
}

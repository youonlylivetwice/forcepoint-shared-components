import { CSSProperties, ElementType } from 'react';
import Link from '../../../01-elements/link/link';
import Typography from '../../../01-elements/typography/typography';
import ArrowRightIcon from '../../../00-tokens/icons/arrow-right-icon';
import { cn } from '../../../../utils/tailwind-merge';

export type Card380Props = {
  bgColor?: string;
  className?: string;
  description?: string;
  eyebrow?: string;
  isNav?: boolean;
  linkComponent?: ElementType;
  linkText?: string;
  title?: string;
  url?: string;
};

export default function Card380({
  bgColor,
  className,
  description,
  eyebrow,
  isNav,
  linkComponent: LinkComponent = 'a',
  linkText,
  title,
  url,
}: Card380Props) {
  const cardStyles: CSSProperties = {};

  function hexToRgb(bgColor: string) {
    const bigint = parseInt(bgColor.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  function calculateTextColor(bgColor: string) {
    const [r, g, b] = hexToRgb(bgColor);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#1d252c' : '#fff';
  }

  if (bgColor) {
    const textColor = calculateTextColor(bgColor);
    cardStyles.backgroundColor = bgColor;
    cardStyles.color = textColor;
  }

  return (
    <Link
      href={url}
      style={cardStyles}
      component={LinkComponent}
      className={cn(
        'group flex w-full flex-col items-start gap-md rounded-m p-md md:max-w-[380px]',
        className,
      )}
    >
      {eyebrow && (
        <Typography
          variant={isNav ? 'body-4' : 'h5'}
          className="font-semibold uppercase text-inherit"
        >
          {eyebrow}
        </Typography>
      )}
      <Typography className="font-semibold" variant={isNav ? 'h4' : 'h2'}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body-3" className="font-normal">
          {description}
        </Typography>
      )}
      {linkText && (
        <Link
          animated
          color="inherit"
          component="span"
          size={isNav ? 'small' : 'large'}
          className="font-medium opacity-80 group-hover:opacity-100 md:mt-auto"
          endIcon={<ArrowRightIcon />}
        >
          {linkText}
        </Link>
      )}
    </Link>
  );
}

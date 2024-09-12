import { ElementType, ReactNode } from 'react';
import { cn } from '../../../utils/tailwind-merge';
import {
  calculateBrightness,
  hexToRgb,
} from '../../00-tokens/color/color-shared';
import Link from '../../01-elements/link/link';
import Typography from '../../01-elements/typography/typography';

export type FeaturedResourceListItemProps = {
  endIcon?: ReactNode;
  eyebrow: string;
  linkComponent?: ElementType;
  sectionBgColor?: string;
  startIcon?: ReactNode;
  title: string;
  url: string;
  onClick?: () => void;
};

export default function FeaturedResourceListItem({
  endIcon,
  eyebrow,
  linkComponent: LinkComponent = 'a',
  sectionBgColor,
  startIcon,
  title,
  url,
  onClick,
}: FeaturedResourceListItemProps) {
  let isDarkMode = false;

  if (sectionBgColor) {
    const color = hexToRgb(sectionBgColor);
    const brightness = calculateBrightness(color);
    isDarkMode = brightness < 125;
  }

  return (
    <Link
      href={url}
      component={LinkComponent}
      className="group/resource-link w-full border-b border-brumosa last:border-transparent"
      color={isDarkMode ? 'white' : 'blue'}
      onClick={onClick}>
      <div className="flex flex-col gap-md py-md uppercase">
        <Typography
          variant="h5"
          className={cn('font-[600] leading-none text-viola', {
            'text-sandwisp': isDarkMode,
          })}>
          {eyebrow}
        </Typography>
        <div className="flex gap-md">
          {startIcon}
          <Link
            component="span"
            endIcon={endIcon}
            color={isDarkMode ? 'white' : 'blue'}
            className={cn(
              'text-h4 font-[600] normal-case leading-none group-hover/resource-link:text-navy',
              {
                'group-hover/resource-link:text-sandwisp': isDarkMode,
              },
            )}
            animated>
            {title}
          </Link>
        </div>
      </div>
    </Link>
  );
}

import { ElementType, ReactNode } from 'react';
import Link from '../../01-elements/link/link';
import Typography from '../../01-elements/typography/typography';
import { cn } from '../../../utils/tailwind-merge';
import {
  calculateBrightness,
  hexToRgb,
} from '../../00-tokens/color/color-shared';

export type FeaturedResourceListItemProps = {
  endIcon?: ReactNode;
  eyebrow: string;
  linkComponent?: ElementType;
  sectionBgColor?: string;
  startIcon?: ReactNode;
  title: string;
  url: string;
};

export default function FeaturedResourceListItem({
  endIcon,
  eyebrow,
  linkComponent: LinkComponent = 'a',
  sectionBgColor,
  startIcon,
  title,
  url,
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
    >
      <div className="flex flex-col gap-md py-md uppercase">
        <Typography
          variant="h5"
          className={cn('font-[600] leading-none text-viola', {
            'text-sandwisp': isDarkMode,
          })}
        >
          {eyebrow}
        </Typography>
        <div className="flex gap-md">
          {startIcon}
          <Link
            component="span"
            endIcon={endIcon}
            color={isDarkMode ? 'white' : 'blue'}
            className={cn(
              'text-h4 normal-case leading-none group-hover/resource-link:text-navy',
              {
                'group-hover/resource-link:text-sandwisp': isDarkMode,
              },
            )}
            animated
          >
            {title}
          </Link>
        </div>
      </div>
    </Link>
  );
}

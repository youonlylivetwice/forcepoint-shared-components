import { ElementType, ReactNode } from 'react';
import Link from '../../01-elements/link/link';
import Typography from '../../01-elements/typography/typography';
import { cn } from '../../../utils/tailwind-merge';

export type FeaturedResourceListItemProps = {
  endIcon?: ReactNode;
  eyebrow: string;
  linkComponent?: ElementType;
  startIcon?: ReactNode;
  themeMode?: 'dark' | 'light';
  title: string;
  url: string;
};

export default function FeaturedResourceListItem({
  endIcon,
  eyebrow,
  linkComponent: LinkComponent = 'a',
  startIcon,
  themeMode = 'light',
  title,
  url,
}: FeaturedResourceListItemProps) {
  const isDarkMode = themeMode === 'dark';

  return (
    <Link
      href={url}
      component={LinkComponent}
      className="group/resource-link w-full border-b border-brumosa"
    >
      <div className="flex flex-col gap-md py-md uppercase">
        <Typography
          variant="h5"
          className={cn('font-[600] text-viola', {
            'text-sandwisp': isDarkMode,
          })}
        >
          {eyebrow}
        </Typography>
        <Link
          component="span"
          endIcon={endIcon}
          startIcon={startIcon}
          color={isDarkMode ? 'white' : 'blue'}
          className={cn(
            'text-h4 normal-case group-hover/resource-link:text-navy',
            {
              'group-hover/resource-link:text-sandwisp': isDarkMode,
            },
          )}
          animated
        >
          {title}
        </Link>
      </div>
    </Link>
  );
}

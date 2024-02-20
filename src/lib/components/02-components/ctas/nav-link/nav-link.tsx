import { cn } from '../../../../utils/tailwind-merge';
import { ElementType } from 'react';
import { MenuItemImageProps } from '../../menus/main-menu/main-menu';
import ChevronRightIcon from '../../../00-tokens/icons/chevron-right-icon';
import Link from '../../../01-elements/link/link';

export type NavLinkProps = {
  className?: string;
  description?: string;
  href?: string;
  icon?: MenuItemImageProps;
  linkComponent?: ElementType;
  title: string;
};

export default function NavLink({
  className,
  description,
  href,
  icon,
  linkComponent: LinkComponent = 'a',
  title,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      component={LinkComponent}
      className={cn('group/nav-link w-full lg:max-w-[380px]', className)}
    >
      <div className="flex w-full gap-md">
        {/* Link icon */}
        {icon && (
          <div className="h-xl w-xl rounded-s bg-gradient-to-t from-white to-azure p-sm">
            <img
              className="block h-full w-full"
              src={icon.media?.src}
              role="presentation"
              alt=""
            />
          </div>
        )}
        {/* Link content */}
        <div className="flex flex-1 flex-col justify-center gap-sm">
          <Link
            animated
            color="black"
            component="span"
            endIcon={<ChevronRightIcon />}
            className={cn('group-hover/nav-link:text-teal', {
              'text-body-3 font-semibold': icon,
              'text-body-3 font-medium leading-none lg:text-h6': !icon,
            })}
          >
            {title}
          </Link>
          {description && (
            <span className="text-h6 font-normal leading-none text-black">
              {description}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

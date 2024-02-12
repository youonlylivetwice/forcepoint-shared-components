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
      className={cn('menu:max-w-[380px] w-full', className)}
    >
      <div className="flex w-full gap-md">
        {/* Link icon */}
        {icon && (
          <div className="h-xl w-xl rounded-s bg-gradient-to-t from-white to-azure p-sm">
            <img
              className="block h-full w-full"
              role="presentation"
              src={icon.src}
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
            className={cn({
              'text-body-3 font-semibold': icon,
              'menu:text-h6 text-body-3 font-medium leading-none': !icon,
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

import { ElementType } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import ChevronRightIcon from '../../../00-tokens/icons/chevron-right-icon';
import Link from '../../../01-elements/link/link';
import { MenuItemImageProps } from '../../menus/main-menu/main-menu';

export type NavLinkProps = {
  className?: string;
  description?: string;
  href?: string;
  icon?: MenuItemImageProps;
  linkComponent?: ElementType;
  title: string;
  onClick?: () => void;
};

export default function NavLink({
  className,
  description,
  href,
  icon,
  linkComponent: LinkComponent = 'a',
  title,
  ...props
}: NavLinkProps) {
  return (
    <Link
      href={href}
      component={LinkComponent}
      className={cn('group/nav-link w-full lg:max-w-[380px]', className)}
      {...props}
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
        <div className="flex flex-1 flex-col justify-center gap-xs">
          <Link
            animated
            color="black"
            component="span"
            endIcon={<ChevronRightIcon />}
            className={cn('group-hover/nav-link:text-blue', {
              'text-[16px] font-bold': icon,
              'text-[16px] font-medium leading-none': !icon,
            })}
          >
            {title}
          </Link>
          {description && (
            <span className="text-[14px] font-normal leading-none text-black">
              {description}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

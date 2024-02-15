import { ElementType } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import ArrowBottomIcon from '../../../00-tokens/icons/arrow-bottom-icon';
import Link from '../../../01-elements/link/link';

export type MainNavLinkProps = {
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  linkComponent?: ElementType;
  title: string;
  index: number;
};

export default function MainNavLink({
  href,
  isActive,
  linkComponent: LinkComponent = 'a',
  title,
  onClick,
  index,
}: MainNavLinkProps) {
  const itemLabel = (
    <span className="menu:text-body-3 menu:font-normal w-full py-md text-h4 font-semibold text-inherit rtl:text-right">
      {title}
    </span>
  );

  return (
    <div
      className={cn(
        'menu:relative menu:w-fit menu:gap-xs group flex w-full flex-row items-center justify-center text-black hover:text-teal',
        { 'text-teal': isActive },
      )}
    >
      {href && (
        <Link animated href={href} className="flex-1" component={LinkComponent}>
          {itemLabel}
        </Link>
      )}
      <button
        className={cn(
          'flex h-full items-center gap-xs outline-offset-4',
          { 'w-full text-left': !href },
          {
            'menu:p-0 rtl:menu:p-0 py-md pl-lg rtl:pl-0 rtl:pr-lg': href,
          },
        )}
        aria-label={`${title} submenu`}
        aria-expanded={isActive}
        onClick={onClick}
        aria-haspopup="true"
        type="button"
        aria-controls={`main-submenu-${index}`}
      >
        {!href && itemLabel}
        <ArrowBottomIcon
          className={`menu:h-[8px] menu:w-[8px] menu:rotate-0 rtl:menu:rotate-0 pointer-events-none h-[16px] w-[16px] rotate-[270deg] rtl:rotate-90 ${
            isActive ? 'menu:rotate-180 rtl:menu:rotate-180' : 'menu:rotate-0'
          }`}
        />
      </button>
    </div>
  );
}

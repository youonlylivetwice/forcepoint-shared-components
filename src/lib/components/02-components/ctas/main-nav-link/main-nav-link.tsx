import { ElementType } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import ArrowBottomIcon from '../../../00-tokens/icons/arrow-bottom-icon';
import Link from '../../../01-elements/link/link';

export type MainNavLinkProps = {
  handlerCloseMenu: () => void;
  href?: string;
  index: number;
  isActive?: boolean;
  linkComponent?: ElementType;
  onClick?: () => void;
  title: string;
};

export default function MainNavLink({
  handlerCloseMenu,
  href,
  isActive,
  linkComponent: LinkComponent = 'a',
  title,
  onClick,
  index,
}: MainNavLinkProps) {
  const itemLabel = (
    <span className="w-full py-md text-h4 font-semibold text-inherit rtl:text-right lg:text-body-3 lg:font-normal">
      {title}
    </span>
  );

  return (
    <div
      className={cn(
        'group flex w-full flex-row items-center justify-center text-black hover:text-teal lg:relative lg:w-fit lg:gap-xs',
        { 'text-teal': isActive },
      )}
    >
      {href && (
        <Link
          animated
          href={href}
          className="flex-1"
          component={LinkComponent}
          onClick={handlerCloseMenu}
        >
          {itemLabel}
        </Link>
      )}
      <button
        className={cn(
          'flex h-full items-center gap-xs outline-offset-4',
          { 'w-full text-left': !href },
          {
            'py-md pl-lg rtl:pl-0 rtl:pr-lg lg:p-0 rtl:lg:p-0': href,
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
          className={`pointer-events-none h-[16px] w-[16px] rotate-[270deg] rtl:rotate-90 lg:h-[8px] lg:w-[8px] lg:rotate-0 rtl:lg:rotate-0 ${
            isActive ? 'lg:rotate-180 rtl:lg:rotate-180' : 'lg:rotate-0'
          }`}
        />
      </button>
    </div>
  );
}

import { ElementType } from 'react';
import { cn } from '../../../../../utils/tailwind-merge';
import { ArrowBottomIcon } from '../../../../00-tokens/icons';
import Link from '../../../../01-elements/link/link';

export type MainNavLinkProps = {
  handlerCloseMenu: () => void;
  href?: string;
  index: number;
  isActive?: boolean;
  linkComponent?: ElementType;
  onClick?: () => void;
  title: string;
  textColor: 'black' | 'white';
};

type MenuColor = 'black' | 'white';

export default function MainNavLink({
  handlerCloseMenu,
  href,
  isActive,
  linkComponent: LinkComponent = 'a',
  title,
  onClick,
  index,
  textColor = 'black',
}: MainNavLinkProps) {
  const itemLabel = (
    <span className="w-full py-md text-body-2 font-semibold text-inherit rtl:text-right lg:font-normal">
      {title}
    </span>
  );

  const textColorSchema: { [key in MenuColor]: { default: string; active: string; hover: string } } = {
    black: {
      default: 'text-black',
      active: 'text-blue',
      hover: 'hover:text-blue'
    },
    white: {
      default: 'text-white',
      active: 'text-sandwisp-bright',
      hover: 'hover:text-sandwisp-bright'
    },
  };

  return (
    <div
      className={cn(
        'group flex w-full flex-row items-center justify-center lg:relative lg:w-fit lg:gap-xs',
        textColorSchema[textColor].default,
        textColorSchema[textColor].hover,
        isActive && textColorSchema[textColor].active,
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

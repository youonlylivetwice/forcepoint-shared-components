import { ElementType, useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import ArrowBottomIcon from '../../../00-tokens/icons/arrow-bottom-icon';
import ArrowExitIcon from '../../../00-tokens/icons/arrow-exit-icon';
import BackIcon from '../../../00-tokens/icons/back-icon';
import CloseIcon from '../../../00-tokens/icons/close-icon';
import GlobeIcon from '../../../00-tokens/icons/globe-icon';
import Link from '../../../01-elements/link/link';
import Typography from '../../../01-elements/typography/typography';

export type MenuItemProps = {
  active?: boolean;
  below?: MenuItemProps[];
  linkProps?: {};
  title: string;
  url?: string;
};

export type MenuProps = {
  handlerCloseMenu: () => void;
  isLanguageSwitcher?: boolean;
  items: MenuItemProps[];
  linkComponent?: ElementType;
  menuClass: string;
};

export default function SecondaryMenu({
  handlerCloseMenu,
  isLanguageSwitcher,
  items,
  linkComponent: LinkComponent = 'a',
  menuClass,
}: MenuProps) {
  const [active, setActive] = useState<number | undefined>();

  /**
   * Handles opening/closing a submenu based on the provided index.
   * @param index - The index of the submenu to be opened or closed.
   */
  const handlerOpenSubmenu = (index: number) => {
    setActive(index !== active ? index : -1);
  };

  /**
   * Handles the blur event on an element.
   * @param {React.FocusEventHandler<Element>} e - The blur event.
   */
  const handleBlur: React.FocusEventHandler<Element> = (e) => {
    e.preventDefault();
    // Retrieves the related target element that received focus.
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    // Checks if the related target element does not exist or is not an instance of 'submenu-item'.
    if (
      (!relatedTarget || !relatedTarget.classList.contains('submenu-item')) &&
      window.innerWidth >= 950
    ) {
      // Deactivates the active action when losing focus.
      setActive(-1);
    }
  };

  /**
   * Handles the keydown event to react to the "Escape" key.
   * @param {React.KeyboardEventHandler<HTMLUListElement>} e - The keydown event object.
   */
  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    // Check if the pressed key is "Escape".
    if (e.key === 'Escape') {
      // Deactivate and blur the menu item upon pressing the "Escape" key.
      setActive(-1);
      e.currentTarget.blur();
    }
  };

  /**
   * Handles the mouse over event for menu items.
   * @param {MenuItemProps} item - The menu item being hovered.
   * @param {number} index - The index of the menu item in the list.
   */
  const handleOnMouseOver = (item: MenuItemProps, index: number): void => {
    // Check if the menu item has sub-items
    if (item.below && window.innerWidth >= 950 && !isLanguageSwitcher) {
      setActive(index);
    }
  };

  /**
   * Handles the mouse out event for menu items.
   * @param {MenuItemProps} item - The menu item being hovered.
   * @param {number} index - The index of the menu item in the list.
   */
  const handleOnMouseOut = (item: MenuItemProps): void => {
    // Check if the menu item has sub-items
    if (item.below && window.innerWidth >= 950 && !isLanguageSwitcher) {
      setActive(-1);
    }
  };

  const renderSubitem = (item: MenuItemProps, index: number) => {
    if (!item.url) return;

    return (
      <li key={`${menuClass}-subitem-${index}`} className="leading-[10px]">
        <Link
          color="black"
          href={item.url}
          component={LinkComponent}
          className={cn(
            'submenu-item flex w-full flex-row items-center gap-x-xs py-sm md:py-0',
            {
              'text-brumosa hover:text-brumosa': item.active,
            },
          )}
          {...item.linkProps}
        >
          <span className="text-right text-h5 font-semibold text-inherit md:text-h6">
            {item.title}
          </span>
          {!isLanguageSwitcher &&
            (item.url.startsWith('https') ? (
              <ArrowExitIcon className="h-[16px] w-[16px] rtl:rotate-180" />
            ) : (
              <BackIcon className="h-[8px] w-[8px] rotate-180 rtl:rotate-0" />
            ))}
        </Link>
      </li>
    );
  };

  const renderSubmenu = (item: MenuItemProps, index: number) => {
    return (
      <div
        id={`${menuClass}-submenu-${index}`}
        className={cn(
          'absolute top-0 z-10 flex h-screen w-full flex-col md:top-[100%] md:h-auto md:w-[280px]',
          { hidden: active !== index },
        )}
        onBlur={handleBlur}
      >
        {/* Mobile Heading */}
        <div className="mx-auto flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white md:hidden">
          <button
            className="back-button py-md pr-md rtl:pl-md rtl:pr-0"
            onClick={() => handlerOpenSubmenu(-1)}
            aria-label="Go back"
          >
            <BackIcon className="rotate-0 text-grey md:rotate-[90deg]" />
          </button>
          <span className="block flex-1 text-start text-body-2 text-grey rtl:text-right">
            {item.title}
          </span>
          <button
            className="block p-md text-center"
            onClick={handlerCloseMenu}
            aria-label="Close menu"
          >
            <CloseIcon className="text-grey" />
          </button>
        </div>
        {/* Desktop Heading */}
        <div className="flex w-full justify-center">
          <BackIcon className="hidden rotate-[90deg] text-brumosa md:block" />
        </div>
        {/* Items */}
        <ul className="flex flex-1 flex-col bg-white py-sm md:gap-md md:rounded-m md:p-md md:shadow-md">
          {item.below?.map(renderSubitem)}
        </ul>
      </div>
    );
  };

  const renderItem = (item: MenuItemProps, index: number) => {
    const isActive = active === index;

    const itemLabel = (
      <Typography
        variant="h6"
        className={cn(
          'w-full py-md font-semibold uppercase text-inherit rtl:text-right md:py-0',
          {
            'w-[86px] overflow-hidden text-ellipsis whitespace-nowrap':
              isLanguageSwitcher,
          },
        )}
      >
        {item.title}
      </Typography>
    );
    return (
      <li
        key={`${menuClass}-item-${index}`}
        className={cn(
          'group flex flex-row items-center justify-center text-grey hover:text-teal md:relative md:gap-xs',
          { 'text-teal': isActive },
        )}
        onMouseOver={() => handleOnMouseOver(item, index)}
        onMouseOut={() => handleOnMouseOut(item)}
      >
        {item.url && (
          <Link
            className="w-full"
            color="inherit"
            component={LinkComponent}
            href={item.url}
            {...item.linkProps}
          >
            {itemLabel}
          </Link>
        )}
        {item.below && (
          <>
            <button
              className={cn(
                'flex h-full items-center gap-xs outline-offset-4',
                { 'w-full text-left': !item.url },
                {
                  'py-md pl-lg rtl:pl-0 rtl:pr-lg md:p-0 rtl:md:p-0': item.url,
                },
              )}
              onClick={() => handlerOpenSubmenu(index)}
              aria-controls={`${menuClass}-submenu-${index}`}
              aria-label={`${item.title} submenu`}
              aria-expanded={isActive}
            >
              {isLanguageSwitcher && (
                <GlobeIcon className="pointer-events-none h-[16px] w-[16px]" />
              )}
              {!item.url && itemLabel}
              <ArrowBottomIcon
                className={`pointer-events-none h-[16px] w-[16px] rotate-[270deg] rtl:rotate-90 md:h-[8px] md:w-[8px] md:rotate-0 rtl:md:rotate-0 ${
                  isActive ? 'md:rotate-180 rtl:md:rotate-180' : 'md:rotate-0'
                }`}
              />
            </button>
            {renderSubmenu(item, index)}
          </>
        )}
      </li>
    );
  };

  return (
    <ul
      className={`${menuClass} flex flex-col gap-x-md divide-y divide-brumosa md:flex-row md:divide-y-0`}
      onKeyDown={handleKeyDown}
    >
      {items.map(renderItem)}
    </ul>
  );
}

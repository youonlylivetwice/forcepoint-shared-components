import { ElementType, useEffect, useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowBottomIcon, ArrowExitIcon, BackIcon, CloseIcon, GlobeIcon } from '../../../00-tokens/icons';
import Link from '../../../01-elements/link/link';
import Typography from '../../../01-elements/typography/typography';

export type SecondaryMenuItemProps = {
  active?: boolean;
  below?: SecondaryMenuItemProps[];
  linkProps?: {
    [key: string]: string;
  };
  title: string;
  url?: string;
  class?: string | null;
};

export type SecondaryMenuProps = {
  handlerCloseMenu?: () => void;
  isLanguageSwitcher?: boolean;
  items: SecondaryMenuItemProps[];
  linkComponent?: ElementType;
  menuClass?: string;
  menuLabel?: string;
  onFooter?: boolean;
};

export default function SecondaryMenu({
  handlerCloseMenu,
  isLanguageSwitcher,
  items,
  linkComponent: LinkComponent = 'a',
  menuClass = 'secondary-menu',
  menuLabel = 'Secondary Menu',
  onFooter = false,
}: SecondaryMenuProps) {
  const [active, setActive] = useState<number | undefined>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!event.target) return;
      const selected = event.target as Element;
      const parent = selected?.closest('.language-switcher');
      if (!parent) {
        setActive(-1);
      }
    };
    if (isLanguageSwitcher) document.addEventListener('click', handleClick);
    return () => {
      if (isLanguageSwitcher) {
        document.removeEventListener('click', handleClick);
      }
    };
  }, []);

  /**
   * Handles opening/closing a submenu based on the provided index.
   * @param index - The index of the submenu to be opened or closed.
   */
  const handlerOpenSubmenu = (index: number) => {
    const isActive = index === active;
    const isIndexAbsent = index === -1;
    const isMobile = window.innerWidth < 1156;
    const siteHeader = document.querySelector('.site-header');

    if (siteHeader && isMobile && isIndexAbsent) {
      removeOverflowHiddenClass(siteHeader);
    } else if (siteHeader && isMobile && !isActive) {
      siteHeader.classList.add('max-lg:overflow-hidden');
      siteHeader.scrollTo(0, 0);
    }

    setActive(isActive ? -1 : index);
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
      window.innerWidth >= 1156
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
   * @param {SecondaryMenuItemProps} item - The menu item being hovered.
   * @param {number} index - The index of the menu item in the list.
   */
  const handleOnMouseOver = (
    item: SecondaryMenuItemProps,
    index: number,
  ): void => {
    // Check if the menu item has sub-items
    if (
      item.below?.length &&
      window.innerWidth >= 1156 &&
      !isLanguageSwitcher
    ) {
      setActive(index);
    }
  };

  /**
   * Handles the mouse out event for menu items.
   * @param {SecondaryMenuItemProps} item - The menu item being hovered.
   * @param {number} index - The index of the menu item in the list.
   */
  const handleOnMouseOut = (item: SecondaryMenuItemProps): void => {
    // Check if the menu item has sub-items
    if (
      item.below?.length &&
      window.innerWidth >= 1156 &&
      !isLanguageSwitcher
    ) {
      setActive(-1);
    }
  };

  const onCloseMainMenu = () => {
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) removeOverflowHiddenClass(siteHeader);
    if (handlerCloseMenu) handlerCloseMenu();
  };

  const removeOverflowHiddenClass = (element: Element) => {
    if (element.classList.contains('max-lg:overflow-hidden')) {
      element.classList.remove('max-lg:overflow-hidden');
    }
  };

  const renderSubitem = (item: SecondaryMenuItemProps, index: number) => {
    if (!item.url) return;

    return (
      <li key={`${menuClass}-subitem-${index}`} className="leading-[10px]">
        <Link
          color="black"
          href={item.url}
          component={LinkComponent}
          onClick={onCloseMainMenu}
          target={item.url.startsWith('http') ? '_blank' : undefined}
          className={cn(
            'submenu-item flex w-full flex-row items-center gap-x-xs px-md py-sm lg:p-0',
            {
              'max-lg:text-h5 max-lg:font-semibold max-lg:leading-none max-lg:text-grey max-lg:hover:text-blue max-lg:focus:text-blue':
                onFooter && isLanguageSwitcher,
              'text-chateau-dark hover:text-chateau-dark': item.active,
              'max-lg:text-brumosa max-lg:hover:text-brumosa':
                item.active && onFooter && isLanguageSwitcher,
            },
          )}
          {...item.linkProps}>
          <span className="text-right text-h5 font-semibold text-inherit lg:text-h6">
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

  const renderSubmenu = (item: SecondaryMenuItemProps, index: number) => {
    return (
      <div
        id={`${menuClass}-submenu-${index}`}
        className={cn(
          'absolute top-0 z-10 flex h-screen w-full flex-col overflow-scroll lg:top-[100%] lg:h-auto lg:w-[280px] lg:overflow-visible',
          {
            hidden: active !== index,
            'h-auto max-lg:static lg:bottom-[100%] lg:top-auto':
              onFooter && isLanguageSwitcher,
          },
        )}
        onBlur={handleBlur}
      >
        {/* Mobile Heading */}
        <div
          className={cn(
            'mx-auto flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white lg:hidden',
            { hidden: onFooter && isLanguageSwitcher },
          )}
        >
          <button
            aria-label="Go back"
            className="back-button p-md"
            onClick={() => handlerOpenSubmenu(-1)}
          >
            <BackIcon className="rotate-0 text-grey lg:rotate-[90deg]" />
          </button>
          <span className="block flex-1 text-start text-body-2 text-grey rtl:text-right">
            {item.title}
          </span>
          <button
            className="block p-md text-center"
            onClick={onCloseMainMenu}
            aria-label="Close menu"
          >
            <CloseIcon className="text-grey" />
          </button>
        </div>
        {/* Desktop Heading */}
        <div
          className={cn('flex w-full justify-center', {
            'order-2': onFooter && isLanguageSwitcher,
          })}
        >
          <BackIcon
            className={cn('hidden rotate-[90deg] text-brumosa lg:block', {
              'rotate-[270deg]': onFooter && isLanguageSwitcher,
            })}
          />
        </div>
        {/* Items */}
        <ul
          className={cn(
            'flex flex-1 flex-col bg-white py-sm lg:gap-md lg:rounded-m lg:p-md lg:shadow-md',
            { 'max-lg:bg-transparent': onFooter && isLanguageSwitcher },
          )}
        >
          {item.below?.map(renderSubitem)}
        </ul>
      </div>
    );
  };

  const renderItem = (item: SecondaryMenuItemProps, index: number) => {
    const isActive = active === index;

    const itemLabel = (
      <Typography
        variant="h6"
        className={cn(
          'w-full py-md text-[12px] font-semibold uppercase text-inherit rtl:text-right lg:py-0',
          {
            'overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-[86px]':
              isLanguageSwitcher,
            'lg:text-[13px]': onFooter && isLanguageSwitcher,
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
          'group flex flex-row items-center justify-center text-grey hover:text-blue lg:relative lg:gap-xs',
          {
            'text-blue': isActive,
            'flex-col': onFooter && isLanguageSwitcher,
            'max-lg:text-grey max-lg:hover:text-grey':
              isActive && onFooter && isLanguageSwitcher,
          },
        )}
        onMouseOver={() => handleOnMouseOver(item, index)}
        onMouseOut={() => handleOnMouseOut(item)}>
        {item.url && (
          <Link
            onClick={onCloseMainMenu}
            component={LinkComponent}
            className="w-full"
            color="inherit"
            href={item.url}
            target={item.url.startsWith('http') ? '_blank' : undefined}
            {...item.linkProps}>
            {itemLabel}
          </Link>
        )}
        {!!item.below?.length && (
          <>
            <button
              className={cn(
                'flex h-full items-center gap-xs outline-offset-4',
                {
                  'w-full text-left': !item.url,
                  'py-md pl-lg rtl:pl-0 rtl:pr-lg lg:p-0 rtl:lg:p-0': item.url,
                },
              )}
              onClick={() => handlerOpenSubmenu(index)}
              aria-controls={`${menuClass}-submenu-${index}`}
              aria-label={`${item.title} submenu`}
              aria-expanded={isActive}
              aria-haspopup="true"
              type="button">
              {isLanguageSwitcher && (
                <GlobeIcon className="pointer-events-none h-[16px] w-[16px] min-w-[16px]" />
              )}
              {!item.url && itemLabel}
              <ArrowBottomIcon
                className={cn(
                  'pointer-events-none ml-auto h-[16px] w-[16px] min-w-[16px] rotate-[270deg] rtl:rotate-90 lg:h-[8px] lg:w-[8px] lg:rotate-0 rtl:lg:rotate-0',
                  {
                    'lg:rotate-180 rtl:lg:rotate-180': isActive,
                    'lg:rotate-0': !isActive,
                    'rotate-[0deg] rtl:rotate-[0deg]':
                      onFooter && isLanguageSwitcher,
                    'max-lg:rotate-[180deg] rtl:max-lg:rotate-[180deg]':
                      isActive && onFooter && isLanguageSwitcher,
                  },
                )}
              />
            </button>
            {renderSubmenu(item, index)}
          </>
        )}
      </li>
    );
  };

  return (
    <nav aria-label={menuLabel}>
      <ul
        className={`${menuClass} flex flex-col gap-x-md divide-y divide-brumosa lg:flex-row lg:divide-y-0`}
        onKeyDown={handleKeyDown}
      >
        {items.map(renderItem)}
      </ul>
    </nav>
  );
}

import { useState } from 'react';
import CloseIcon from '../../icons/close-icon';
import Link from '../../../01-elements/link/link';
import ArrowRightIcon from '../../icons/arrow-right-icon';
import ArrowBottomIcon from '../../icons/arrow-bottom-icon';
import Typography from '../../../00-tokens/typography/typography';

export type MenuItemProps = {
  url?: string;
  title: string;
  below?: MenuItemProps[];
  menuClass?: string;
};

export type MenuProps = {
  menuClass: string;
  items: MenuItemProps[];
  toggleMenu: (value: boolean) => void;
};

export default function Inline({ items, menuClass, toggleMenu }: MenuProps) {
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
    if (item.below && window.innerWidth >= 950) {
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
    if (item.below && window.innerWidth >= 950) {
      setActive(-1);
    }
  };

  const renderSubitem = (item: MenuItemProps, index: number) => {
    if (!item.url) return;

    return (
      <li key={`${menuClass}-subitem-${index}`}>
        <Link
          color="black"
          href={item.url}
          className={`submenu-item flex flex-row items-center gap-x-xs`}
        >
          <Typography
            variant="submenu-link"
            className="text-right font-semibold text-inherit"
          >
            {item.title}
          </Typography>
          <ArrowRightIcon className="h-[8px] w-[8px] rotate-180 rtl:rotate-0" />
        </Link>
      </li>
    );
  };

  const renderSubmenu = (item: MenuItemProps) => {
    return (
      <div
        className="absolute top-0 z-10 flex h-screen w-screen flex-col md:top-[100%] md:h-auto md:w-[280px]"
        onBlur={handleBlur}
      >
        {/* Desktop Heading */}
        <div className="mx-auto flex w-full flex-row items-center justify-center gap-md border-b border-b-mercury bg-white p-md md:hidden">
          <button onClick={() => handlerOpenSubmenu(-1)}>
            <ArrowRightIcon className="rotate-0 text-grey md:rotate-[90deg] md:text-brumosa" />
          </button>
          <p className="block flex-1 text-start text-body-2 text-grey rtl:text-right md:hidden">
            {item.title}
          </p>
          <button
            className="block text-center md:hidden"
            onClick={() => toggleMenu(false)}
          >
            <CloseIcon />
          </button>
        </div>
        {/* Mobile Heading */}
        <div className="flex w-full justify-center">
          <ArrowRightIcon className="hidden rotate-[90deg] text-brumosa md:block" />
        </div>
        {/* Items */}
        <div className="flex-1 bg-white p-md md:rounded-m md:shadow-md">
          <ul className="flex flex-col gap-md">
            {item.below?.map(renderSubitem)}
          </ul>
        </div>
      </div>
    );
  };

  const renderItem = (item: MenuItemProps, index: number) => {
    const isActive = active === index;

    const itemLabel = (
      <Typography
        variant="h6"
        className="w-full py-md font-semibold uppercase text-inherit rtl:text-right md:py-0"
      >
        {item.title}
      </Typography>
    );
    return (
      <li
        key={`${menuClass}-item-${index}`}
        className={`flex flex-row items-center justify-center gap-md text-grey hover:text-teal md:relative md:gap-xs ${
          isActive ? 'text-teal' : ''
        }`}
        onMouseOver={() => handleOnMouseOver(item, index)}
        onMouseOut={() => handleOnMouseOut(item)}
      >
        {item.url ? (
          <Link href={item.url} className="w-full">
            {itemLabel}
          </Link>
        ) : (
          itemLabel
        )}
        {item.below && (
          <button
            className="h-full outline-offset-4"
            onClick={() => handlerOpenSubmenu(index)}
            aria-label={`${item.title} menu`}
            aria-expanded={isActive}
          >
            <ArrowBottomIcon
              className={`h-[16px] w-[16px] rotate-[270deg] rtl:rotate-90 md:h-[8px] md:w-[8px] md:rotate-0 rtl:md:rotate-0 ${
                isActive ? 'md:rotate-180 rtl:md:rotate-180' : 'md:rotate-0'
              }`}
            />
          </button>
        )}
        {isActive && renderSubmenu(item)}
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

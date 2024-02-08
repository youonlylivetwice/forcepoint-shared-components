import { ElementType, useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import ArrowBottomIcon from '../../../00-tokens/icons/arrow-bottom-icon';
import Link from '../../../01-elements/link/link';
import { MenuItemProps } from '../secondary-menu/secondary-menu';

export type FooterMenuProps = {
  items: MenuItemProps[];
  linkComponent?: ElementType;
};

export default function FooterMenu({
  items,
  linkComponent: LinkComponent = 'a',
}: FooterMenuProps) {
  const [activeItems, setActiveItems] = useState<{ [key: number]: boolean }>(
    {},
  );

  const closeSubmenuOnKey = (
    e: React.KeyboardEvent<HTMLUListElement>,
    index: number,
  ) => {
    if (e.key === 'Escape') {
      setActiveItems((prevActiveItems) => ({
        ...prevActiveItems,
        [index]: false,
      }));
    }
  };

  const toggleSubMenu = (index: number) => {
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [index]: !prevActiveItems[index],
    }));
  };

  const renderSubitem = (item: MenuItemProps, index: number) => {
    if (!item.url) return;

    return (
      <li key={`footer-subitem-${index}`} className="py-sm leading-none">
        <Link
          href={item.url}
          component={LinkComponent}
          {...item.linkProps}
          className={cn(
            'pointer-events-auto text-h5 font-semibold text-grey hover:text-blue focus:text-blue max-md:leading-none md:text-h6',
            { 'text-chateau': item.active },
          )}
        >
          {item.title}
        </Link>
      </li>
    );
  };

  const renderSubmenu = (item: MenuItemProps, index: number) => {
    const isActive = activeItems[index] || false;
    return (
      <ul
        onKeyDown={(e) => closeSubmenuOnKey(e, index)}
        id={`footer-submenu-${index}`}
        aria-expanded={isActive}
        className={cn(
          'hidden max-h-0 w-full shrink grow-0 overflow-hidden transition-all duration-200 md:mt-md md:block md:max-h-[1000px]',
          {
            'block max-h-[1000px]': isActive,
          },
        )}
        aria-hidden={!isActive}
      >
        {item.below?.map(renderSubitem)}
      </ul>
    );
  };

  const renderMenuItem = (item: MenuItemProps, index: number) => {
    const isActive = activeItems[index] || false;

    return (
      <li
        key={`footer-item-${index}`}
        className="flex w-full flex-row flex-wrap items-center justify-between md:block"
      >
        {item.url && (
          <Link
            href={item.url}
            component={LinkComponent}
            {...item.linkProps}
            className="py-md text-body-2 font-semibold text-navy hover:text-blue focus:text-blue max-md:leading-none md:py-0 md:text-h4"
          >
            {item.title}
          </Link>
        )}
        {item.below && (
          <>
            <button
              className={cn(
                'flex h-full grow items-center justify-between gap-xs py-md text-body-2 font-semibold text-navy hover:text-blue focus:text-blue max-md:leading-none md:h-auto md:gap-0 md:py-0 md:text-h4',
                {
                  'w-full md:cursor-auto md:hover:text-navy md:focus:text-navy':
                    !item.url,
                },
              )}
              onClick={() => toggleSubMenu(index)}
              aria-controls={`footer-submenu-${index}`}
              aria-label={
                isActive
                  ? `Close ${item.title} submenu`
                  : `Open ${item.title} submenu`
              }
            >
              {!item.url && item.title}
              <ArrowBottomIcon
                className={cn(
                  'ml-auto h-[16px] w-[16px] transition-transform duration-200 md:hidden',
                  { 'rotate-180 rtl:rotate-180': isActive },
                )}
              />
            </button>
            {item.below && renderSubmenu(item, index)}
          </>
        )}
      </li>
    );
  };

  return (
    <nav>
      <ul className="flex flex-col divide-y divide-brumosa md:flex-row md:gap-x-lg md:divide-y-0">
        {items.map(renderMenuItem)}
      </ul>
    </nav>
  );
}

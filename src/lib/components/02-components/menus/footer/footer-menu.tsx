import { ElementType, useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowBottomIcon } from '../../../00-tokens/icons';
import Link from '../../../01-elements/link/link';
import { SecondaryMenuItemProps } from '../secondary-menu/secondary-menu';

export type FooterMenuProps = {
  items: SecondaryMenuItemProps[];
  linkComponent?: ElementType;
  menuLabel?: string;
};

export default function FooterMenu({
  items,
  linkComponent: LinkComponent = 'a',
  menuLabel = 'Footer Menu',
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

  const renderSubitem = (item: SecondaryMenuItemProps, index: number) => {
    if (!item.url) return;

    return (
      <li key={`footer-subitem-${index}`} className="pb-sm pt-xs leading-none">
        <Link
          href={item.url}
          target={item.url.startsWith('http') ? '_blank' : undefined}
          component={LinkComponent}
          {...item.linkProps}
          className={cn(
            'pointer-events-auto text-left text-h5 font-semibold text-grey hover:text-blue focus:text-blue rtl:text-right max-md:leading-none md:text-h6 md:font-medium',
            { 'text-chateau': item.active },
            item?.class,
          )}>
          {item.title}
        </Link>
      </li>
    );
  };

  const renderSubmenu = (item: SecondaryMenuItemProps, index: number) => {
    const isActive = activeItems[index] || false;
    return (
      <ul
        onKeyDown={(e) => closeSubmenuOnKey(e, index)}
        id={`footer-submenu-${index}`}
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

  const renderMenuItem = (item: SecondaryMenuItemProps, index: number) => {
    const isActive = activeItems[index] || false;

    return (
      <li
        key={`footer-item-${index}`}
        className="flex w-full flex-row flex-wrap items-center justify-between md:block">
        {item.url && (
          <Link
            href={item.url}
            component={LinkComponent}
            target={item.url.startsWith('http') ? '_blank' : undefined}
            {...item.linkProps}
            className="w-[calc(100%-20px)] py-md text-left text-body-2 font-semibold text-navy hover:text-blue focus:text-blue rtl:text-right max-md:leading-none md:py-0 md:text-h4">
            {item.title}
          </Link>
        )}
        {item.below && (
          <>
            <button
              className={cn(
                'flex h-full min-w-[16px] grow items-center justify-between gap-xs py-md text-left text-body-2 font-semibold text-navy hover:text-blue focus:text-blue max-md:leading-none md:hidden md:h-auto md:gap-0 md:py-0 md:text-h4',
                {
                  'w-full md:cursor-auto md:hover:text-navy md:focus:text-navy':
                    !item.url,
                },
              )}
              onClick={() => toggleSubMenu(index)}
              aria-controls={`footer-submenu-${index}`}
              aria-expanded={isActive}
              aria-haspopup="true"
              aria-label={
                isActive
                  ? `Close ${item.title} submenu`
                  : `Open ${item.title} submenu`
              }
              type="button">
              {!item.url && item.title}
              <ArrowBottomIcon
                className={cn(
                  'ml-auto h-[16px] w-[16px] min-w-[16px] transition-transform duration-200 rtl:ml-0 rtl:mr-auto md:hidden',
                  { 'rotate-180 rtl:rotate-180': isActive },
                )}
              />
            </button>
            {!item.url && (
              <span className="hidden text-left text-body-2 font-semibold text-navy hover:text-blue focus:text-blue rtl:text-right max-md:leading-none md:block md:h-auto md:gap-0 md:py-0 md:text-h4">
                {item.title}
              </span>
            )}

            {item.below && renderSubmenu(item, index)}
          </>
        )}
      </li>
    );
  };

  return (
    <nav aria-label={menuLabel}>
      <ul className="flex flex-col divide-y divide-brumosa md:flex-row md:gap-x-lg md:divide-y-0">
        {items.map(renderMenuItem)}
      </ul>
    </nav>
  );
}

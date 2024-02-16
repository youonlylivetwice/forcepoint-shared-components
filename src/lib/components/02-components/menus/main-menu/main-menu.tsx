/* tslint:disable:no-unused-variable */
import { cn } from '../../../../utils/tailwind-merge';
import { CSSProperties, ElementType, MouseEvent, useState } from 'react';
import ArrowRightIcon from '../../../00-tokens/icons/arrow-right-icon';
import Button from '../../../01-elements/button/button';
import Card380 from '../../cards/card-380/card-380';
import CardNavHighlight from '../../cards/nav-highlight/nav-highlight';
import ChevronRightIcon from '../../../00-tokens/icons/chevron-right-icon';
import Link, { LinkProps } from '../../../01-elements/link/link';
import MainNavLink from '../../ctas/main-nav-link/main-nav-link';
import MenuModal from '../menu-modal/menu-modal';
import NavLink from '../../ctas/nav-link/nav-link';
import Typography from '../../../01-elements/typography/typography';

export type MenuItemImageProps = {
  src: string;
  alt?: string;
};

type MenuItemAlignment = 'left_align' | 'right_align';

type MenuItemDisplay =
  | 'label'
  | 'no_label'
  | 'label_small_arrow'
  | 'label_large_arrow'
  | 'heading'
  | 'heading_icon'
  | 'button'
  | 'button_with_arrow'
  | 'button_outline'
  | 'image_display'
  | 'image_with_content'
  | 'card';

type MenuItemWidth =
  | 'full_width'
  | 'fifth_width'
  | 'quarter_width'
  | 'third_width'
  | 'half_width'
  | 'two_third_width'
  | 'three_quarter_width'
  | 'inline_width';

export type MenuItemProps = {
  active?: boolean;
  alignment?: MenuItemAlignment;
  below?: MenuItemProps[];
  bgColor?: string;
  bottomLink?: string;
  className?: string;
  ctaButton?: string;
  description?: string;
  display: MenuItemDisplay;
  icon?: MenuItemImageProps;
  iconOnHover?: MenuItemImageProps;
  linkProps?: LinkProps;
  title: string;
  url?: string;
  width?: MenuItemWidth;
};

export type MainMenuProps = {
  handlerCloseMenu: () => void;
  items: MenuItemProps[];
  linkComponent?: ElementType;
  menuLabel?: string;
};

export type TokensType = Record<
  string,
  {
    value: number;
    type: string;
  }
>;

const itemAlignmentSchema: {
  [key in MenuItemAlignment]: string;
} = {
  left_align: 'menu:float-left',
  right_align: 'menu:float-right menu:ml-auto rtl:menu:mr-auto',
};

const itemWidthSchema: { [key in MenuItemWidth]: Record<string, string> } = {
  full_width: {
    child: 'menu:col-span-full w-full',
    parent: 'grid menu:grid-cols-1',
  },
  fifth_width: {
    child: 'menu:col-span-1',
    parent: 'grid menu:grid-cols-5',
  },
  quarter_width: {
    child: 'menu:col-span-1',
    parent: 'grid menu:grid-cols-4',
  },
  third_width: {
    child: 'menu:col-span-1',
    parent: 'grid menu:grid-cols-3',
  },
  half_width: {
    child: 'menu:col-span-1',
    parent: 'grid menu:grid-cols-2',
  },
  two_third_width: {
    child: 'menu:col-span-2',
    parent: 'grid menu:grid-cols-3',
  },
  three_quarter_width: {
    child: 'menu:col-span-3',
    parent: 'grid menu:grid-cols-4',
  },
  inline_width: { child: 'menu:w-max', parent: '' },
};

export default function MainMenu({
  handlerCloseMenu,
  items,
  linkComponent: LinkComponent = 'a',
  menuLabel = 'Main menu',
}: MainMenuProps) {
  const [active, setActive] = useState<number>(-1);

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
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    if (
      (!relatedTarget ||
        !relatedTarget.parentElement?.classList.contains('submenu-item')) &&
      window.innerWidth >= 1156
    ) {
      setActive(-1);
    }
  };

  /**
   * Handles the keydown event to react to the "Escape" key.
   * @param {React.KeyboardEventHandler<HTMLUListElement>} e - The keydown event object.
   */
  const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
    if (e.key === 'Escape') {
      setActive(-1);
      e.currentTarget.blur();
    }
  };

  /**
   * Handles the mouse over event for menu items.
   * @param {MenuItemProps} item - The menu item being hovered.
   * @param {number} index - The index of the menu item in the list.
   */
  const handleOnMouseOver = (
    event: MouseEvent<HTMLLIElement>,
    item: MenuItemProps,
    index: number,
  ): void => {
    if (item.below && window.innerWidth >= 1156) {
      setActive(index);
      const selectedRect = event.currentTarget?.getBoundingClientRect();
      const navHighlight = document.querySelector(
        '.nav-highlight',
      ) as HTMLElement;

      // Animation for highlighting navigation.
      if (navHighlight && selectedRect) {
        navHighlight.style.width = `${selectedRect.width}px`;
        navHighlight.style.left = `${selectedRect.x}px`;
        navHighlight.style.height = '4px';
      }
    }
  };

  /**
   * Handles the mouse out event for menu items.
   * @param {MenuItemProps} item - The menu item being leaved.
   */
  const handleOnMouseOut = (item: MenuItemProps): void => {
    if (item.below && window.innerWidth >= 1156) {
      setActive(-1);
      const navHighlight = document.querySelector(
        '.nav-highlight',
      ) as HTMLElement;

      if (navHighlight) navHighlight.style.height = '0px';
    }
  };

  const renderMenuItemComponent = (item: MenuItemProps, index: number) => {
    switch (item.display) {
      case 'label': {
        return (
          <MainNavLink
            href={item.url}
            title={item.title}
            isActive={index === active}
            linkComponent={LinkComponent}
            onClick={() => setActive(index)}
          />
        );
      }
      case 'label_small_arrow': {
        return (
          <NavLink
            href={item.url}
            icon={item.icon}
            title={item.title}
            linkComponent={LinkComponent}
            description={item.description}
          />
        );
      }
      case 'label_large_arrow': {
        return (
          <Link
            animated
            size="large"
            color="black"
            href={item.url}
            component={LinkComponent}
            endIcon={<ChevronRightIcon />}
            className="menu:mb-0 my-0 font-medium"
          >
            {item.title}
          </Link>
        );
      }
      case 'image_with_content': {
        return (
          <CardNavHighlight
            url={item.url}
            icon={item.icon}
            title={item.title}
            ctaButton={item.ctaButton}
            linkComponent={LinkComponent}
            description={item.description}
            iconOnHover={item.iconOnHover}
            size={item.width === 'full_width' ? 'large' : 'small'}
          />
        );
      }
      case 'button': {
        return (
          <Button
            as="link"
            color="blue"
            href={item.url}
            component={LinkComponent}
            className="menu:w-fit block w-full text-center"
          >
            {item.title}
          </Button>
        );
      }
      case 'button_with_arrow': {
        return (
          <Link
            animated
            size="small"
            color="black"
            href={item.url}
            component={LinkComponent}
            endIcon={<ArrowRightIcon />}
            className="menu:pt-sm menu:block flex justify-center"
          >
            {item.title}
          </Link>
        );
      }
      case 'card': {
        return (
          <Card380
            isNav
            url={item.url}
            title={item.title}
            bgColor={item.bgColor}
            linkText={item.ctaButton}
            eyebrow={item.description}
            linkComponent={LinkComponent}
            className="menu:max-w-none h-full"
          />
        );
      }
      case 'heading': {
        return (
          <Typography
            variant="h6"
            component="span"
            className="block font-semibold uppercase text-violette"
          >
            {item.title}
          </Typography>
        );
      }
    }
  };

  const grouping = (display: string = '') => {
    return ['label', 'no_label'].includes(display);
  };

  const renderSubMenuContainer = (
    item: MenuItemProps,
    index: number,
    depth: number,
  ) => {
    const isGroup = grouping(item.display);
    const lastItem = item.below?.[item.below?.length - 1];

    const subClasses = cn(
      {
        'py-lg gap-y-md menu:gap-y-sm menu:px-lg menu:gap-x-lg menu:h-full menu:content-start':
          depth === 1 && isGroup,
      },
      isGroup && lastItem?.width && [itemWidthSchema[lastItem?.width].parent],
      !grouping(lastItem?.display) && [
        `menu-item--wrapper-${lastItem?.display}`,
      ],
    );

    const renderedItems = (
      <ul className={subClasses}>
        {item.below?.map((child: MenuItemProps, index: number) =>
          renderItem(child, index, depth + 1),
        )}
      </ul>
    );

    if (depth) {
      return renderedItems;
    } else {
      return (
        <MenuModal
          title={item.title}
          onBlur={handleBlur}
          isOpen={index === active}
          hideHeaderOnDesktop={true}
          handlerCloseMenu={handlerCloseMenu}
          className="menu:w-auto left-0 w-full"
          handlerCloseSubMenu={() => handlerOpenSubmenu(-1)}
        >
          <div className="menu:rounded-b-m menu:shadow-md h-full bg-white">
            {renderedItems}
          </div>
        </MenuModal>
      );
    }
  };

  const renderItem = (
    item: MenuItemProps,
    index: number,
    depth: number = 0,
  ) => {
    const firstEl = item.below?.[0];
    const isGroup = grouping(item.display);
    const menuItemStyles: CSSProperties = {};
    const hasTitle = firstEl?.display === 'label_large_arrow';

    if (isGroup && item.bgColor) {
      menuItemStyles.backgroundColor = item.bgColor;
    }

    return (
      <li
        key={index}
        className={cn(
          `menu-item__${item.display}`,
          depth > 1 ? 'submenu-item' : 'menu-item',
          item.alignment && itemAlignmentSchema[item.alignment],
          item.below && `menu-item--subitems-${item.below.length}`,
          depth && item.width && itemWidthSchema[item.width].child,
          {
            'menu-item__group': isGroup,
            'menu:px-0 px-md': depth === 1,
            'menu-item__with-icon': item.icon,
            'menu-item__group--with-title': isGroup && hasTitle,
          },
        )}
        onMouseOver={(e: MouseEvent<HTMLLIElement>) => {
          if (depth === 0) handleOnMouseOver(e, item, index);
        }}
        onMouseOut={() => {
          if (depth === 0) handleOnMouseOut(item);
        }}
        style={menuItemStyles}
      >
        {renderMenuItemComponent(item, index)}
        {item.below && renderSubMenuContainer(item, index, depth)}
      </li>
    );
  };

  return (
    <nav className="relative" aria-label={menuLabel}>
      <ul
        className="main-menu menu:flex-row menu:items-center menu:divide-y-0 flex flex-col gap-x-md divide-y divide-brumosa"
        onKeyDown={handleKeyDown}
      >
        {items.map((item: MenuItemProps, index: number) =>
          renderItem(item, index),
        )}
      </ul>
      <span
        className="nav-highlight transition-left transition-height height-0 pointer-events-none fixed translate-y-[-2px] z-10 bg-teal duration-300"
        aria-hidden
      ></span>
    </nav>
  );
}

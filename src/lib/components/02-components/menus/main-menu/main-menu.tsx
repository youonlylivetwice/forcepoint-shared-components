/* tslint:disable:no-unused-variable */
import { CSSProperties, ElementType, MouseEvent, useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { ArrowRightIcon, ChevronRightIcon } from '../../../00-tokens/icons';
import Button from '../../../01-elements/button/button';
import Link, { LinkProps } from '../../../01-elements/link/link';
import Typography from '../../../01-elements/typography/typography';
import Card380 from '../../cards/card-380/card-380';
import CardNavHighlight from '../../cards/nav-highlight/nav-highlight';
import MainNavLink from '../menu-links/main-nav-link/main-nav-link';
import NavLink from '../menu-links/nav-link/nav-link';
import MenuModal from '../menu-modal/menu-modal';

export type MenuItemImageProps = {
  media: {
    src: string;
    alt?: string;
  };
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

export type MainMenuItemProps = {
  active?: boolean;
  alignment?: MenuItemAlignment;
  below?: MainMenuItemProps[];
  bgColor?: string;
  bottomLink?: string;
  className?: string;
  ctaHeader?: string;
  description?: string;
  display: MenuItemDisplay;
  icon?: MenuItemImageProps;
  iconOnHover?: MenuItemImageProps;
  linkProps?: LinkProps;
  title: string;
  url?: string;
  width?: MenuItemWidth;
  component?: ElementType;
  modalId?: string;
};

export type MainMenuProps = {
  handlerCloseMenu: () => void;
  items: MainMenuItemProps[];
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
  left_align: 'lg:float-left',
  right_align: 'lg:float-right lg:ml-auto rtl:lg:mr-auto lg:rtl:ml-0',
};

const itemWidthSchema: { [key in MenuItemWidth]: Record<string, string> } = {
  full_width: {
    child: 'lg:col-span-full w-full',
    parent: 'grid lg:grid-cols-1 lg:h-full',
  },
  fifth_width: {
    child: 'lg:col-span-1',
    parent: 'grid lg:grid-cols-5',
  },
  quarter_width: {
    child: 'lg:col-span-1',
    parent: 'grid lg:grid-cols-4',
  },
  third_width: {
    child: 'lg:col-span-1',
    parent: 'grid lg:grid-cols-3',
  },
  half_width: {
    child: 'lg:col-span-1',
    parent: 'grid lg:grid-cols-2',
  },
  two_third_width: {
    child: 'lg:col-span-2',
    parent: 'grid lg:grid-cols-3',
  },
  three_quarter_width: {
    child: 'lg:col-span-3',
    parent: 'grid lg:grid-cols-4',
  },
  inline_width: { child: 'lg:w-max', parent: '' },
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
    item: MainMenuItemProps,
    index: number,
  ): void => {
    if (item.below && window.innerWidth >= 1156) {
      setActive(index);
      const itemHighlighting = event.currentTarget;
      const mainMenu = document.querySelector('.main-menu');

      if (mainMenu && itemHighlighting && item.display === 'label') {
        const menuRect = mainMenu.getBoundingClientRect();
        const itemRect = itemHighlighting.getBoundingClientRect();

        const navHighlight = document.querySelector(
          '.nav-highlight',
        ) as HTMLElement;

        // Animation for highlighting navigation.
        if (navHighlight) {
          navHighlight.style.left = `${itemRect.x - menuRect.x}px`;
          navHighlight.style.width = `${itemRect.width}px`;
          navHighlight.style.height = '4px';
        }
      }
    }
  };

  /**
   * Handles the mouse out event for menu items.
   * @param {MainMenuItemProps} item - The menu item being leaved.
   */
  const handleOnMouseOut = (item: MainMenuItemProps): void => {
    if (item.below && window.innerWidth >= 1156) {
      setActive(-1);
      const navHighlight = document.querySelector(
        '.nav-highlight',
      ) as HTMLElement;

      if (navHighlight) navHighlight.style.height = '0px';
    }
  };

  const renderMenuItemComponent = (item: MainMenuItemProps, index: number) => {
    switch (item.display) {
      case 'label': {
        return (
          <MainNavLink
            href={item.url}
            title={item.title}
            isActive={index === active}
            linkComponent={LinkComponent}
            onClick={() => setActive(index)}
            handlerCloseMenu={handlerCloseMenu}
            index={index}
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
            onClick={onCloseMainMenu}
          />
        );
      }
      case 'label_large_arrow': {
        return (
          <Link
            animated
            size="large"
            color="blue"
            href={item.url}
            component={LinkComponent}
            endIcon={<ChevronRightIcon />}
            className="my-0 font-medium hover:text-black lg:mb-0"
            onClick={onCloseMainMenu}>
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
            ctaButton={item.ctaHeader}
            linkComponent={LinkComponent}
            description={item.description}
            iconOnHover={item.iconOnHover}
            size={item.width === 'full_width' ? 'large' : 'small'}
            onClick={onCloseMainMenu}
          />
        );
      }
      case 'button': {
        return (
          <Button
            as="link"
            href={item.url}
            component={item.component ?? LinkComponent}
            modalId={item.modalId}
            className="relative flex w-full justify-center overflow-hidden bg-[radial-gradient(circle,#0360d5_0,#023e8a_100%)] text-center before:absolute before:-top-10 before:right-[150%] before:h-[300%] before:w-7 before:rotate-45 before:animate-[shiny_30s_ease_infinite] before:bg-white before:opacity-30 hover:bg-[radial-gradient(circle,#0249a3_0,#023e8a_100%)] lg:w-fit"
            onClick={onCloseMainMenu}
            endIcon={<ArrowRightIcon />}>
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
            className="max-lg:w-full max-lg:text-center lg:block lg:pt-sm"
            onClick={onCloseMainMenu}>
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
            linkText={item.ctaHeader}
            eyebrow={item.description}
            linkComponent={LinkComponent}
            className="h-full lg:max-w-none"
            onClick={onCloseMainMenu}
          />
        );
      }
      case 'heading': {
        return (
          <Typography
            variant="h6"
            component="span"
            className="block font-semibold uppercase text-violette">
            {item.title}
          </Typography>
        );
      }
    }
  };

  const grouping = (display: string = '') => {
    return ['label', 'no_label'].includes(display);
  };

  const onCloseMainMenu = () => {
    if (handlerCloseMenu) handlerCloseMenu();
  };

  const renderSubMenuContainer = (
    item: MainMenuItemProps,
    index: number,
    depth: number,
  ) => {
    const isGroup = grouping(item.display);
    const lastItem = item.below?.[item.below?.length - 1];

    const subClasses = cn(
      `depth: ${depth}`,
      {
        'py-lg gap-y-md lg:gap-y-sm lg:px-lg lg:gap-x-0 lg:h-full lg:content-start':
          depth === 1 && isGroup,
      },
      lastItem?.display === 'button' &&
        'rtl:flex rtl:flex-row-reverse rtl:gap-x-md rtl:justify-end rtl:w-fit',
      isGroup && lastItem?.width && [itemWidthSchema[lastItem?.width].parent],
      !grouping(lastItem?.display) && [
        `menu-item--wrapper-${lastItem?.display}`,
      ],
    );

    const renderedItems = (
      <ul className={subClasses}>
        {item.below?.map((child: MainMenuItemProps, index: number) =>
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
          id={`main-submenu-${index}`}
          handlerCloseMenu={handlerCloseMenu}
          handlerCloseSubMenu={() => handlerOpenSubmenu(-1)}
          className="left-0 w-full lg:w-auto lg:rtl:left-auto lg:rtl:right-0">
          <div className="h-full bg-white lg:overflow-hidden lg:rounded-b-m lg:shadow-md">
            {renderedItems}
          </div>
        </MenuModal>
      );
    }
  };

  const renderItem = (
    item: MainMenuItemProps,
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
          item.below && `menu-item--subitems-${item.below.length}`,
          depth && item.width && itemWidthSchema[item.width].child,
          item.alignment && itemAlignmentSchema[item.alignment],
          {
            'menu-item__group': isGroup,
            'px-md lg:px-0': depth === 1,
            'ltr:last:lg:pl-[45px] rtl:last:lg:pr-[45px]':
              depth === 2 &&
              item.display === 'no_label' &&
              item.alignment === 'left_align' &&
              item.width !== 'full_width',

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
        style={menuItemStyles}>
        {renderMenuItemComponent(item, index)}
        {item.below && renderSubMenuContainer(item, index, depth)}
      </li>
    );
  };

  return (
    <nav className="main-menu relative" aria-label={menuLabel}>
      <ul
        className="flex flex-col gap-x-md divide-y divide-brumosa lg:flex-row lg:items-center lg:divide-y-0"
        onKeyDown={handleKeyDown}>
        {items.map((item: MainMenuItemProps, index: number) =>
          renderItem(item, index),
        )}
      </ul>
      <span
        className="nav-highlight transition-left transition-height height-0 pointer-events-none absolute bottom-[-2px] z-10 bg-blue duration-300"
        aria-hidden></span>
    </nav>
  );
}

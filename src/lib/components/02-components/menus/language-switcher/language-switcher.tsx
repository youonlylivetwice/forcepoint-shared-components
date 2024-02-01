import { ElementType } from 'react';
import SecondaryMenu, { MenuItemProps } from '../secondary-menu/secondary-menu';

interface Locale {
  active: boolean;
  linkProps?: {};
  localeCode: string;
  localeName: string;
}

interface LanguageSwitcherProps {
  linkComponent?: ElementType;
  locales: Locale[];
  url: string;
}

export default function LanguageSwitcher({
  linkComponent: LinkComponent = 'a',
  locales,
  url,
}: LanguageSwitcherProps) {
  // Move active locale to the beginning of the array
  const activeIndex = locales.findIndex((locale) => locale.active);
  if (activeIndex > -1) {
    const [activeLocale] = locales.splice(activeIndex, 1);
    locales.unshift(activeLocale);
  }

  const belowItems: MenuItemProps[] = locales.map((item) => ({
    title: item.localeName,
    url: `/${item.localeCode}${url}`,
    active: item.active,
    linkProps: item.linkProps,
  }));

  const activeLocaleName =
    locales.find((locale) => locale.active)?.localeName || '';

  const menuItems: MenuItemProps = {
    title: activeLocaleName,
    below: belowItems,
  };

  return (
    <SecondaryMenu
      items={[menuItems]}
      menuClass="language-switcher"
      handlerCloseMenu={() => {}}
      isLanguageSwitcher={true}
      linkComponent={LinkComponent}
    />
  );
}

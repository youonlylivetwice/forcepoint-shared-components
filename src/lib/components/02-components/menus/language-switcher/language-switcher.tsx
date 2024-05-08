import SecondaryMenu, {
  SecondaryMenuItemProps,
} from '../secondary-menu/secondary-menu';

export type LocaleMenuItem = {
  active: boolean;
  linkProps?: {
    [key: string]: string;
  };
  localeCode: string;
  localeName: string;
};

export type LanguageSwitcherProps = {
  handlerCloseMenu?: () => void;
  locales: LocaleMenuItem[];
  menuLabel?: string;
  onFooter?: boolean;
  url: string;
  excludedLancode?: string;
};

export default function LanguageSwitcher({
  handlerCloseMenu,
  locales,
  menuLabel = 'Language switcher',
  onFooter = false,
  url,
  excludedLancode,
}: LanguageSwitcherProps) {
  // Move active locale to the beginning of the array
  const activeIndex = locales.findIndex((locale) => locale.active);
  if (activeIndex > -1) {
    const [activeLocale] = locales.splice(activeIndex, 1);
    locales.unshift(activeLocale);
  }

  const belowItems: SecondaryMenuItemProps[] = locales.map((item) => {
    let itemUrl = url;
    if (excludedLancode !== item.localeCode) {
      itemUrl = url === '/' ? `/${item.localeCode}` : `/${item.localeCode}${url}`;
    }

    return {
      title: item.localeName,
      url: itemUrl,
      active: item.active,
      linkProps: item.linkProps,
    };
  });

  const activeLocaleName =
    locales.find((locale) => locale.active)?.localeName || '';

  const menuItems: SecondaryMenuItemProps = {
    title: activeLocaleName,
    below: belowItems,
  };

  return (
    <SecondaryMenu
      items={[menuItems]}
      onFooter={onFooter}
      menuLabel={menuLabel}
      isLanguageSwitcher={true}
      menuClass="language-switcher"
      handlerCloseMenu={handlerCloseMenu}
    />
  );
}

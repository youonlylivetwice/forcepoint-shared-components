import SecondaryMenu, { MenuItemProps } from '../secondary-menu/secondary-menu';

interface LanguageSwitcherProps {
  activeLocale: AvailableLocales;
  locales: AvailableLocales[];
  url: string;
}

export type AvailableLocales =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pt-br'
  | 'tr'
  | 'zh-hans'
  | 'zh-hant'
  | 'ar';

const matchLanguage: { [key in AvailableLocales]: string } = {
  en: 'English',
  es: 'Español (América Latina)',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  'pt-br': 'Português',
  tr: 'Türkçe',
  'zh-hans': '简体中文',
  'zh-hant': '繁體中文',
  ar: 'العربية',
};

export default function LanguageSwitcher({
  activeLocale,
  locales,
  url,
}: LanguageSwitcherProps) {
    const activeIndex = locales.findIndex(locale => locale === activeLocale);
    if (activeIndex > 0) {
      const [activeItem] = locales.splice(activeIndex, 1);
      locales.unshift(activeItem);
    }

    const belowItems: MenuItemProps[] = locales.map(locale => ({
      title: matchLanguage[locale],
      url: `/${locale}/${url}`,
      active: activeLocale === locale,
    }));

    const menuItems: MenuItemProps = {
      title: matchLanguage[activeLocale],
      below: belowItems
    };

  return (
    <SecondaryMenu
      items={[menuItems]}
      menuClass="language-switcher"
      toggleMenu={() => {}}
      isLanguageSwitcher={true}
    />
  );
}

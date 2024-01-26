import { useEffect, useState } from 'react';
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
  const [items, setItems] = useState<MenuItemProps[]>([]);
  useEffect(() => {
    let activeLocaleText = matchLanguage[activeLocale];
    if (activeLocaleText.length > 10) {
      activeLocaleText = `${activeLocaleText.slice(0, 10)}...`;
    }

    const belowItems: MenuItemProps = { title: activeLocaleText, below: [] };

    locales.sort((a, b) => {
      if (a === activeLocale) return -1;
      if (b === activeLocale) return 1;
      return 0;
    });

    locales.forEach((locale) => {
      belowItems.below?.push({
        title: matchLanguage[locale],
        url: `#${locale}/${url}`,
        active: activeLocale === locale,
      });
    });
    setItems([belowItems]);
  }, [activeLocale]);

  return (
    <SecondaryMenu
      items={items}
      menuClass="language-switcher"
      toggleMenu={() => {}}
      isLanguageSwitcher={true}
    />
  );
}

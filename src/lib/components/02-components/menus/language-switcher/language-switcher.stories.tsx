import LanguageSwitcher from './language-switcher';

const meta = {
  title: 'Elements/LanguageSwitcher',
};

const url = '/some-url';
const locales = [
  {
    localeCode: 'en',
    localeName: 'English',
    active: true,
    linkProps: { locale: 'en' },
  },
  {
    localeCode: 'es',
    localeName: 'Español (América Latina)',
    active: false,
    linkProps: { locale: 'es' },
  },
  {
    localeCode: 'fr',
    localeName: 'Français',
    active: false,
    linkProps: { locale: 'fr' },
  },
  {
    localeCode: 'de',
    localeName: 'Deutsch',
    active: false,
    linkProps: { locale: 'de' },
  },
  {
    localeCode: 'it',
    localeName: 'Italiano',
    active: false,
    linkProps: { locale: 'it' },
  },
  {
    localeCode: 'ja',
    localeName: '日本語',
    active: false,
    linkProps: { locale: 'ja' },
  },
  {
    localeCode: 'ko',
    localeName: '한국어',
    active: false,
    linkProps: { locale: 'ko' },
  },
  {
    localeCode: 'pt-br',
    localeName: 'Português',
    active: false,
    linkProps: { locale: 'pt-br' },
  },
  {
    localeCode: 'tr',
    localeName: 'Türkçe',
    active: false,
    linkProps: { locale: 'tr' },
  },
  {
    localeCode: 'zh-hans',
    localeName: '简体中文',
    active: false,
    linkProps: { locale: 'zh-hans' },
  },
  {
    localeCode: 'zh-hant',
    localeName: '繁體中文',
    active: false,
    linkProps: { locale: 'zh-hant' },
  },
  {
    localeCode: 'ar',
    localeName: 'العربية',
    active: false,
    linkProps: { locale: 'ar' },
  },
];

export default meta;

export const Default = () => {
  return (
    <div className="md:mx-3xl">
      <LanguageSwitcher locales={locales} url={url} excludedLancode="en" />
    </div>
  );
};

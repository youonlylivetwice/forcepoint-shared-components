import LanguageSwitcher, { AvailableLocales } from './language-switcher';

const meta = {
  title: 'Elements/LanguageSwitcher',
};

const url = 'some-url';
const activeLocale = 'en';
const locales: AvailableLocales[] = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'ja',
  'ko',
  'pt-br',
  'tr',
  'zh-hans',
  'zh-hant',
  'ar',
];

export default meta;

export const Default = () => {
  return (
    <div className='md:mx-3xl'>
      <LanguageSwitcher
        activeLocale={activeLocale}
        locales={locales}
        url={url}
      />
    </div>
  );
};

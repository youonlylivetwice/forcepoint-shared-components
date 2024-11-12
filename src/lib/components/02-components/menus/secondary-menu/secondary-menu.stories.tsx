import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { cn } from '../../../../utils/tailwind-merge';
import { CloseIcon, MenuIcon } from '../../../00-tokens/icons';
import Branding from '../../branding/branding';
import SecondaryMenu, {
  SecondaryMenuItemProps,
  SecondaryMenuProps,
} from './secondary-menu';

const menuItems: SecondaryMenuItemProps[] = [
  {
    title: 'Government',
    url: '#',
  },
  {
    title: 'Partners',
    url: '#',
    below: [
      {
        title: 'Partner Login',
        url: 'https://partners.forcepoint.com/s/login/',
      },
      {
        title: 'Find a Partner',
        url: '#',
      },
      {
        title: 'Become a Partner',
        url: '#',
      },
      {
        title: 'Global Partner Program',
        url: '#',
      },
      {
        title: 'Technology Partners',
        url: '#',
      },
      {
        title: 'Find a Distributor',
        url: '#',
      },
    ],
  },
  {
    title: 'Services & Support',
    below: [
      {
        title: 'Support Login',
        url: 'https://support.forcepoint.com/s/',
      },
      {
        title: 'Professional Services',
        url: '#',
      },
      {
        title: 'Training',
        url: '#',
      },
    ],
  },
  {
    title: 'Company',
    url: '#',
    below: [
      {
        title: 'Customers',
        url: '#',
      },
      {
        title: 'Newsroom',
        url: '#',
      },
      {
        title: 'Work With Us',
        url: '#',
      },
      {
        title: 'Events',
        url: '#',
      },
      {
        title: 'Contact Us',
        url: '#',
      },
      {
        title: 'Forcepoint Trust Hub',
        url: '#',
      },
    ],
  },
];

const branding = {
  data: {
    info: {
      logo: 'https://live-forcepoint.pantheonsite.io/sites/all/themes/custom/fp/assets/img/logos/forcepoint.svg',
    },
  },
};

const meta = {
  title: 'Components/Menus/Secondary Menu',
  component: SecondaryMenu,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof SecondaryMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({ items, textColor }: SecondaryMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const mainMenuRendered = () => (
    <div className="flex flex-1 bg-white">
      <span className="w-full text-h4 font-semibold text-inherit rtl:text-right lg:py-md lg:text-body-3 lg:font-normal">
        Main menu content
      </span>
    </div>
  );

  const languageSwitcherRendered = () => (
    <div className="bg-white lg:px-0">
      <span className="mt-[1px] flex text-[12px] font-semibold uppercase text-grey">
        Language Switcher
      </span>
    </div>
  );

  const secondaryMenuRendered = () => (
    <SecondaryMenu
      items={items}
      textColor={textColor}
      handlerCloseMenu={() => setIsMenuOpen(false)}
    />
  );

  return (
    <header className={cn('sticky top-0 z-20 bg-white',
      {
        'bg-blue-shade': textColor === 'white',
      }
    )}>
      {/* Desktop */}
      <div className="relative mt-md hidden flex-col gap-xs px-md lg:mx-auto lg:flex lg:max-w-screen-lg">
        <div className="flex flex-1">
          <Branding
            className="inline-flex w-[180px]"
            src={branding.data.info.logo}
            alt="Site Logo" 
          />
          <div className="flex flex-1 justify-end gap-md">
            {secondaryMenuRendered()}
            {languageSwitcherRendered()}
          </div>
        </div>
        <div className="w-full">{mainMenuRendered()}</div>
      </div>
      {/* Mobile */}
      <div
        className={cn(' flex w-screen flex-col lg:hidden', {
          'h-screen': isMenuOpen,
        })}
      >
        {/* Menu heading */}
        <div className="flex w-full flex-row items-center justify-center border-b border-b-mercury bg-white">
          <div className="flex-1 pl-md">
            <Branding
              className="inline-flex w-[84px]"
              src={branding.data.info.logo}
              alt="Site Logo"
            />
          </div>
          <button
            aria-label={'Main menu'}
            aria-expanded={isMenuOpen}
            className="block p-md text-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon className="text-grey" />
            ) : (
              <MenuIcon className="text-grey" />
            )}
          </button>
        </div>
        {/* Menu content */}
        {isMenuOpen && (
          <>
            <div className="border-b border-chateau bg-white p-md">
              {mainMenuRendered()}
            </div>
            <div className="flex-1 bg-azure px-md ">
              {secondaryMenuRendered()}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

Default.args = {
  items: menuItems,
  textColor: 'black',
};

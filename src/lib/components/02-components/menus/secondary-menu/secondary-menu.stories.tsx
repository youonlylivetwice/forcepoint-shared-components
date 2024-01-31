import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MenuIcon from '../../../00-tokens/icons/menu-icon';
import CloseIcon from '../../../00-tokens/icons/close-icon';
import Typography from '../../../01-elements/typography/typography';
import SecondaryMenu, { MenuItemProps, MenuProps } from './secondary-menu';

const menuItems: MenuItemProps[] = [
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

const meta = {
  title: 'Components/Menus/Secondary Menu',
  component: SecondaryMenu,
  argTypes: {
    menuClass: {
      name: 'Menu class',
    },
    items: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof SecondaryMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = ({ items, menuClass }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const secondaryMenuRendered = () => (
    <SecondaryMenu
      items={items}
      menuClass={menuClass}
      handlerCloseMenu={() => setIsMenuOpen(false)}
    />
  );

  return (
    <div className="relative">
      <div className="hidden md:block">{secondaryMenuRendered()}</div>
      {/* Mobile Header */}
      <div className="flex w-full flex-row items-center justify-center bg-white md:hidden">
        <div className="flex-1">
          <Typography variant="h3" className="text-grey">
            LOGO
          </Typography>
        </div>
        <button
          className="block p-md text-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Toggle main menu' : 'Open main menu'}
        >
          {isMenuOpen ? (
            <CloseIcon className="text-grey" />
          ) : (
            <MenuIcon className="text-grey" />
          )}
        </button>
      </div>
      {/* Mobile Main Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <p className="my-sm flex-1 bg-brumosa px-sm py-md md:hidden">
            Main menu content...
          </p>
          {secondaryMenuRendered()}
        </div>
      )}
    </div>
  );
};

Default.args = {
  items: menuItems,
  menuClass: 'secondary-menu',
};

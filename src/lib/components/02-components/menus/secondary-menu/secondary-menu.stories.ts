import type { Meta, StoryObj } from '@storybook/react';
import AspectRatiosDisplay, { MenuItemProps } from './secondary-menu';

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
        url: '#',
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
        url: '#',
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
  component: AspectRatiosDisplay,
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
} satisfies Meta<typeof AspectRatiosDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondaryMenu: Story = {
  args: {
    items: menuItems,
    menuClass: 'secondary-menu',
  },
};

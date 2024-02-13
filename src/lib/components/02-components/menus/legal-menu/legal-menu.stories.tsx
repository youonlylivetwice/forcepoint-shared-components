import type { Meta, StoryObj } from '@storybook/react';
import LegalMenu from './legal-menu';

const menuItems = [
  {
    title: 'Terms & Conditions',
    url: '#',
  },
  {
    title: 'Legal and Privacy',
    url: '#',
  },
  {
    title: 'Manage Cookies',
    url: '#',
  },
  {
    title: '© 2024 Forcepoint',
    url: '#',
  },
];

const meta = {
  title: 'Components/Menus/Legal Menu',
  component: LegalMenu,
} satisfies Meta<typeof LegalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: menuItems,
    menuLabel: 'My Legal Menu',
  },
};

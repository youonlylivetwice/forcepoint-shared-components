import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './nav-link';

const meta = {
  title: 'Components/Ctas/Nav link',
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: 'Our data-first approach to cybersecurity',
    title: 'Our Approach',
    href: '#',
    icon: {
      media: {
        src: 'https://www.forcepoint.com/sites/default/files/casb_0.svg?itok=RgNIGydh',
      },
    },
  },
};

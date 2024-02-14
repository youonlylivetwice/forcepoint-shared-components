import type { Meta, StoryObj } from '@storybook/react';
import MainNavLink from './main-nav-link';

const meta = {
  title: 'Components/Ctas/Main Nav link',
  component: MainNavLink,
} satisfies Meta<typeof MainNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Why Forcepoint',
    index: 0,
  },
};

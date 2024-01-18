import type { Meta, StoryObj } from '@storybook/react';

import Branding from './branding';

const meta = {
  title: 'Elements/Branding',
  component: Branding,
  argTypes: {
    image: {
      options: ['Emblem', 'EmblemOne', 'Logo', 'LogoOne'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Branding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'Logo',
  },
};

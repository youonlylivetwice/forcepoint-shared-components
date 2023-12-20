import type { Meta, StoryObj } from '@storybook/react';

import Link from './link';

const svgIcons = import.meta.glob('../../../../../assets/images/icons/*.svg');
const icons = [];

for (const key in svgIcons) {
  const icon = key.split('icons/')[1].split('.svg')[0];
  icons.push(icon);
}

const meta = {
  title: 'Elements/Link',
  component: Link,
  argTypes: {
    icon: {
      options: ['none', ...icons],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'play',
    iconPosition: 'left',
    text: 'Watch the Video',
    url: 'http://localhost:6006/',
    disabled: false,
  },
};

export const Underline: Story = {
  args: {
    text: 'Get It Today',
    url: 'http://localhost:6006/',
    variant: 'underline',
    disabled: false,
  },
};

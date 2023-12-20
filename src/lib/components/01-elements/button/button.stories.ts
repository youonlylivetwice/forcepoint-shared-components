import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const svgIcons = import.meta.glob('../../../../../assets/images/icons/*.svg');
const icons = [];

for (const key in svgIcons) {
  const icon = key.split('icons/')[1].split('.svg')[0];
  icons.push(icon);
}

const meta = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    icon: {
      options: ['none', ...icons],
      control: { type: 'select' },
    },
    iconPosition: {
      options: ['right', 'left'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button label',
    icon: 'arrow-right',
    iconPosition: 'right',
    size: 'medium',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    text: 'Button label',
    icon: 'arrow-right',
    iconPosition: 'right',
    variant: 'outline',
    size: 'medium',
    disabled: false,
  },
};

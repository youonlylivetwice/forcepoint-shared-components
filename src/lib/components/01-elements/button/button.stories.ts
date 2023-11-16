import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button text',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Button text',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Large button text',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Small button text',
  },
};

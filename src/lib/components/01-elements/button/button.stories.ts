import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Small',
  },
};

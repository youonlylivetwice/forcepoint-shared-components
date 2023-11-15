import type { Meta, StoryObj } from '@storybook/react';

import Link from './link';

const meta = {
  title: 'Elements/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Link',
    url: 'http://localhost:6006/',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Link',
    url: 'http://localhost:6006/',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Large',
    url: 'http://localhost:6006/',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Small',
    url: 'http://localhost:6006/',
  },
};

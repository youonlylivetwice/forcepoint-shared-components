import type { Meta, StoryObj } from '@storybook/react';
import borderDisplay from './border';

const borderVariants = {
  'border-sm': '1',
  'border-md': '2',
  'border-lg': '3',
  'border-xl': '4',
  'border-xxl': '5',
  'border-3xl': '6',
};

const meta = {
  title: 'Tokens/Border',
  component: borderDisplay,
} satisfies Meta<typeof borderDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Border: Story = {
  args: {
    borders: borderVariants,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import SizeDisplay from './sizes';

const widthVariants = {
  '5': 'w-xxs',
  '10': 'w-xs',
  '15': 'w-sm',
  '20': 'w-md',
  '30': 'w-lg',
  '50': 'w-xl',
  '80': 'w-xxl',
  '120': 'w-3xl'
};

const heightVariants = {
  '5': 'h-xxs',
  '10': 'h-xs',
  '15': 'h-sm',
  '20': 'h-md',
  '30': 'h-lg',
  '50': 'h-xl',
  '80': 'h-xxl',
  '120': 'h-3xl'
};

const meta = {
  title: 'Tokens/Sizes',
  component: SizeDisplay,
} satisfies Meta<typeof SizeDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  args: {
    widths: widthVariants,
    heights: heightVariants,
  },
};

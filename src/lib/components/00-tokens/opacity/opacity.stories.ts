import type { Meta, StoryObj } from '@storybook/react';
import OpacityDisplay from './opacity';

const opacityVariants = {
  'opacity-100':' 1',
  'opacity-90': '0.9',
  'opacity-80': '0.8',
  'opacity-70': '0.7',
  'opacity-60': '0.6',
  'opacity-50': '0.5',
  'opacity-40': '0.4',
  'opacity-30': '0.3',
  'opacity-20': '0.2',
  'opacity-10': '0.1',
  'opacity-0': '0',
};

const meta = {
  title: 'Tokens/Opacity',
  component: OpacityDisplay,
} satisfies Meta<typeof OpacityDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Opacity: Story = {
  args: {
    opacities: opacityVariants,
  },
};

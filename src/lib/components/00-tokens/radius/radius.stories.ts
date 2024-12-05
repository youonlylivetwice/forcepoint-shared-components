import type { Meta, StoryObj } from '@storybook/react';
import RadiusDisplay from './radius';

const radiusVariants = {
  'rounded-s': '5',
  'rounded-m': '10',
  'rounded-md': '20',
  'rounded-lg': '30',
};

const meta = {
  title: 'Tokens/Radius',
  component: RadiusDisplay,
} satisfies Meta<typeof RadiusDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Radius: Story = {
  args: {
    radius: radiusVariants,
  },
};

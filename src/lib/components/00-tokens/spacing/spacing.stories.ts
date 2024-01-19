import type { Meta, StoryObj } from '@storybook/react';
import SpacingDisplay from './spacing';

const spacingVariants = {
  'gap-xs': '5',
  'gap-sm': '10',
  'gap-md': '20',
  'gap-lg': '40',
  'gap-xl': '80',
  'gap-xxl': '120',
  'gap-3xl': '160',
};

const meta = {
  title: 'Tokens/Spacing',
  component: SpacingDisplay,
} satisfies Meta<typeof SpacingDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  args: {
    spacings: spacingVariants,
  },
};

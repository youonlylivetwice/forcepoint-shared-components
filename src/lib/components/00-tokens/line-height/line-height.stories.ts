import type { Meta, StoryObj } from '@storybook/react';
import LineHeightDisplay from './line-height';

const leadingsVariants = {
  'leading-none': '1',
  'leading-tight': '110%',
  'leading-snug': '130%',
  'leading-normal': '140%',
  'leading-relaxed': '150%',
};

const meta = {
  title: 'Tokens/Line Height',
  component: LineHeightDisplay,
} satisfies Meta<typeof LineHeightDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineHeight: Story = {
  args: {
    leadings: leadingsVariants,
  },
};

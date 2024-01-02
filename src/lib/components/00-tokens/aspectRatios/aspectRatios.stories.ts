import type { Meta, StoryObj } from '@storybook/react';
import AspectRatiosDisplay from './aspectRatios';

const aspectRatiosVariants = {
  '3/1': 'aspect-[3/1]',
  '2/1': 'aspect-[2/1]',
  '16/9': 'aspect-[16/9]',
  '5/3': 'aspect-[5/3]',
  '4/3': 'aspect-[4/3]',
  '5/4': 'aspect-[5/4]',
  '1/1': 'aspect-[1/1]',
};

const meta = {
  title: 'Tokens/Aspect Ratio',
  component: AspectRatiosDisplay,
} satisfies Meta<typeof AspectRatiosDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AspectRatio: Story = {
  args: {
    aspectRatios: aspectRatiosVariants,
  },
};

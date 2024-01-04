import type { Meta, StoryObj } from '@storybook/react';
import ForegroundBackgroundDisplay from './foregroundBackground';

const meta = {
  title: 'Tokens/Foreground Background',
  component: ForegroundBackgroundDisplay,
  argTypes: {
    color: {
      options: ['navy', 'viola', 'white', 'sandwisp'],
      control: { type: 'select' },
    },
    background:  {
      options: ['white', 'black', 'violette', 'viola', 'navy'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof ForegroundBackgroundDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ForegroundBackground: Story = {
  args: {
    color: 'navy',
    background: 'white',
  },
};

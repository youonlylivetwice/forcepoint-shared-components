import type { Meta, StoryObj } from '@storybook/react';
import CTA from './cta';

const meta = {
  title: 'Components/CTA',
  component: CTA,
  argTypes: {
    style: {
      options: {
        'azure (default)': 'azure',
        black: 'black',
        navy: 'navy',
        warp: 'warp',
        gray: 'gray',
        glow: 'glow',
      },
      control: { type: 'select' },
    },
    link: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: 'azure',
    header: 'Schedule a Live Demo of Forcepoint ONE',
    link: {
      title: 'Secondary',
      url: '/',
    },
  },
};

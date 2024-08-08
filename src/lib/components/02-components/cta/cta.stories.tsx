import type { Meta, StoryObj } from '@storybook/react';
import CTA from './cta';

const meta = {
  title: 'Components/CTA',
  component: CTA,
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'azure',
    header: 'Schedule a Live Demo of Forcepoint ONE',
    link: {
      title: 'Secondary',
      url: '/',
    },
  },
};

export const CtaTextOnly: Story = {
  args: {
    theme: 'azure',
    header: 'Schedule a Live Demo of Forcepoint ONE',
    link: {
      title: 'Secondary',
      url: '/',
    },
    showTextOnly: true,
  },
};

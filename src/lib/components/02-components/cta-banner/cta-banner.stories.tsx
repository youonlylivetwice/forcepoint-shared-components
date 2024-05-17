import type { Meta, StoryObj } from '@storybook/react';
import CtaBanner from './cta-banner';

const meta = {
  title: 'Components/CTA Banner',
  component: CtaBanner,
} satisfies Meta<typeof CtaBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Find it hard to keep pace with modern network demands? Read the Four Steps to Future-Ready Network Security.',
    eyebrow: 'Independent Report',
    primaryButton: {
      title: 'Read Now',
      url: '#',
    },
    theme: 'azure',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import TypographySwatches from './typography-swatches';
import { TypographyVariant } from './typography';

const headlines: TypographyVariant[] = [
  'colossus',
  'uber',
  'hero-1',
  'hero-2',
  'display',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

const paragraphs: TypographyVariant[] = [
  'body-1',
  'body-2',
  'body-3',
  'body-4',
  'body-5',
];

const meta = {
  title: 'Elements/Typography',
  component: TypographySwatches,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    heading: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TypographySwatches>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headlines: Story = {
  args: {
    items: headlines,
    heading: 'Headlines',
    content: 'Forcepoint Converged',
  },
};

export const Paragraphs: Story = {
  args: {
    items: paragraphs,
    heading: 'Paragraphs',
    content:
      'Extensive APIs exchange information with external systems such as identity and access management, physical security, SIEMs, and HR apps to provide behavioral context and send data out to third-party tools and policy enforcement points.',
  },
};

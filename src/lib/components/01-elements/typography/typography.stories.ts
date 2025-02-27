import type { Meta, StoryObj } from '@storybook/react';
import { TypographyVariant } from './typography';
import TypographySwatches from './typography-swatches';

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

const fontWeights: TypographyVariant[] = [
  'font-thin',
  'font-extralight',
  'font-light',
  'font-normal',
  'font-medium',
  'font-semibold',
  'font-bold',
  'font-extrabold',
  'font-thin italic',
  'font-extralight italic',
  'font-light italic',
  'font-normal italic',
  'font-medium italic',
  'font-semibold italic',
  'font-bold italic',
  'font-extrabold italic',
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

export const FontWeights: Story = {
  args: {
    items: fontWeights,
    heading: 'Paragraphs',
    content:
      'Extensive APIs exchange information with external systems such as identity and access management, physical security, SIEMs, and HR apps to provide behavioral context and send data out to third-party tools and policy enforcement points.',
  },
};

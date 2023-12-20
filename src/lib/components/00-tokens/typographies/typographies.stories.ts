import type { Meta, StoryObj } from '@storybook/react';
import Typographies from './typographies';

const headlines = [
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

const paragraphs = [
  'body-1',
  'body-2',
  'body-3',
  'body-4',
  'body-5',
];

const meta = {
  title: 'Tokens/Typographies',
  component: Typographies,
} satisfies Meta<typeof Typographies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headlines: Story = {
  args: {
    items: headlines,
    heading: 'Headlines',
  },
};

export const Paragraphs: Story = {
  args: {
    items: paragraphs,
    heading: 'Paragraphs',
  },
};

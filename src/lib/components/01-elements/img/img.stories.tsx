import type { Meta, StoryObj } from '@storybook/react';
import Img from './img';

const meta = {
  title: 'Elements/Image',
  component: Img,
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    bgColor: {
      control: { type: 'select', options: ['dark', 'light'] },
    },
  },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'Placeholder image',
    src: 'https://via.placeholder.com/150',
    description: 'Placeholder image',
  },
};

export const ImageWithoutCaption: Story = {
  args: {
    alt: 'Placeholder image',
    src: 'https://via.placeholder.com/150',
    description: '',
  },
};

export const DarkTheme: Story = {
  args: {
    alt: 'Placeholder image',
    src: 'https://via.placeholder.com/150',
    description: 'Placeholder image',
    bgColor: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const ExternalImageComponent: Story = {
  args: {
    description: 'Placeholder image',
    renderedImageComponent: (
      <img src="https://via.placeholder.com/150" alt="Placeholder image" />
    ),
  },
};

import type { Meta, StoryObj } from '@storybook/react';


import Img from './img';


const meta = {
  title: 'Elements/Image',
  component: Img,
  argTypes: {
    imgPath: {
      control: { type: 'text' },
    },
    imgDesc: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgPath: 'https://via.placeholder.com/150',
    imgDesc: 'Placeholder image',
  },
};

export const ImageWithoutCaption: Story = {
  args: {
    imgPath: 'https://via.placeholder.com/150',
  },
};

export const DarkTheme: Story = {
  args: {
    imgPath: 'https://via.placeholder.com/150',
    imgDesc: 'Placeholder image',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
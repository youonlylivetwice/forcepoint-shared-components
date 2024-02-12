import type { Meta, StoryObj } from '@storybook/react';
import Logo from '../../../assets/img/branding/logo.svg';
import Branding from './branding';

const meta = {
  title: 'Components/Branding',
  component: Branding,
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Branding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: Logo,
    alt: 'Go to homepage',
    width: 'auto',
    height: 'auto',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import ArrowRight from "../../../assets/img/icons/arrow-right.svg?react";

import Button from './button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    color: {
      options: ['navy', 'viola', 'white', 'sandwisp'],
      control: { type: 'select' },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    disabled: false,
    color: 'navy',
    children: (
      <>
        <span>Default Button</span>
        <ArrowRight />
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    size: 'medium',
    disabled: false,
    variant: 'outline',
    color: 'navy',
    children: (
      <>
        <span>Outline Button</span>
        <ArrowRight />
      </>
    ),
  },
};

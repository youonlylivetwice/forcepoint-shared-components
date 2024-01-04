import type { Meta, StoryObj } from '@storybook/react';
import PlayIcon from "../../../assets/img/icons/play.svg?react";

import Link from './link';

const meta = {
  title: 'Elements/Link',
  component: Link,
  argTypes: {
    size: {
      options: ['small', 'default'],
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
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <PlayIcon />
        <span>Watch the Video</span>
      </>
    ),
    url: 'http://localhost:6006/',
    color: 'navy',
    size: 'default',
    disabled: false,
  },
};

export const Underline: Story = {
  args: {
    text: 'Underline Link',
    url: 'http://localhost:6006/',
    variant: 'underline',
    color: 'navy',
    size: 'default',
    disabled: false,
  },
};

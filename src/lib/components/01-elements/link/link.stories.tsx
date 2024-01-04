import type { Meta, StoryObj } from '@storybook/react';
import PlayIcon from "../../../../../assets/images/icons/play.svg?react";

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
    disabled: false,
    size: 'default',
    url: 'http://localhost:6006/',
  },
};

export const Underline: Story = {
  args: {
    disabled: false,
    size: 'default',
    text: 'Underline Link',
    url: 'http://localhost:6006/',
    variant: 'underline',
  },
};

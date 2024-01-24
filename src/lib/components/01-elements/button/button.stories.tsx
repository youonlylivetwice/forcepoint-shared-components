import type { Meta, StoryObj } from '@storybook/react';
import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';

import Button from './button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: ['navy', 'viola', 'white', 'sandwisp'],
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'outline'],
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
    color: 'navy',
    size: 'medium',
    variant: 'solid',
    disabled: false,
    children: (
      <>
        <span>Button Label</span>
        <ArrowRight className="rtl:rotate-180" />
      </>
    ),
  },
};

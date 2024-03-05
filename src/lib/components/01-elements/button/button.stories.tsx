import type { Meta, StoryObj } from '@storybook/react';
import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';

import Button, { ButtonProps } from './button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: {
        blue: 'blue',
        'white (dark background)': 'white',
        'sandwisp (dark background)': 'sandwisp',
      },
      control: { type: 'select' },
    },
    variant: {
      options: ['solid', 'outline'],
      control: { type: 'select' },
    },
    as: {
      options: ['button', 'link'],
      control: { type: 'select' },
    },
    endIcon: {
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ButtonProps) => {
  return (
    <Button {...args}>
      <span>
        {args.size && args.size.charAt(0).toUpperCase() + args.size.slice(1)}{' '}
        Button
      </span>
    </Button>
  );
};

Default.args = {
  animated: false,
  color: 'blue',
  disabled: false,
  endIcon: <ArrowRight />,
  size: 'medium',
  variant: 'solid',
  as: 'button',
};

import type { Meta, StoryObj } from '@storybook/react';
import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';

import Button, { ButtonProps } from './button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  tags: ['autodocs'],
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
  color: 'navy',
  disabled: false,
  endIcon: <ArrowRight />,
  size: 'medium',
  variant: 'solid',
  as: 'button',
};

import type { Meta, StoryObj } from '@storybook/react';
import ArrowRight from '../../../assets/img/icons/arrow-right.svg?react';

import Link from './link';

const meta = {
  title: 'Elements/Link',
  component: Link,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'blue',
        'navy',
        'sandwisp (dark background)',
        'viola',
        'white (dark background)',
      ],
      control: { type: 'select' },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    underline: {
      options: ['none', 'hover', 'always'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    animated: false,
    children: 'Get It Today',
    color: 'navy',
    endIcon: <ArrowRight />,
    href: 'http://localhost:6006/',
    size: 'large',
    underline: 'always',
    disabled: false,
    className: '',
  },
};

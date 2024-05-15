import type { Meta, StoryObj } from '@storybook/react';
import Pager from './pager';

const meta = {
  title: 'Components/Pager',
  component: Pager,
  tags: ['autodocs'],
} satisfies Meta<typeof Pager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    baseUrl: `${window.location.href}`,
    currentPage: 1,
    totalPages: 10,
    className: 'mx-auto max-w-screen-sm',
  },
};

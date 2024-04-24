import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Products',
        url: '/products',
      },
      {
        label: 'Data Security',
        url: '/products/data-security',
      },
    ],
  },
};

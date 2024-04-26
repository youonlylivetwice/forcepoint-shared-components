import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumb from './breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Azure: Story = {
  args: {
    links: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Data-first SASE',
        url: '/da-first-sase',
      },
      {
        label: 'Simplify Security at the Edge',
        url: '/simple-security-at-the-edge',
      },
    ],
  },
};

export const Navy: Story = {
  args: {
    bgColor: 'navy',
    links: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Data-first SASE',
        url: '/da-first-sase',
      },
      {
        label: 'Simplify Security at the Edge',
        url: '/simple-security-at-the-edge',
      },
    ],
  },
};

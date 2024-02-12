import type { Meta, StoryObj } from '@storybook/react';
import CardComponent from './card-380';

const meta = {
  title: 'Components/Cards/Card 380',
  component: CardComponent,
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: '#',
    eyebrow: 'report',
    linkText: 'Read Now',
    bgColor: '#3D1152',
    description: 'Simplifying Cloud Security: A SANS Review of Forcepoint ONE',
    title: 'Simplifying Cloud Security: A SANS Review of Forcepoint ONE',
  },
};

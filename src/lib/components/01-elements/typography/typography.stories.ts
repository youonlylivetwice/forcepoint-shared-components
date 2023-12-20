import type { Meta, StoryObj } from '@storybook/react';
import Typography from './typography';

const typographyVariants = [
  'colossus',
  'uber',
  'hero-1',
  'hero-2',
  'display',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'body-1',
  'body-2',
  'body-3',
  'body-4',
  'body-5',
];

const meta = {
  title: 'Elements/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: typographyVariants,
      control: { type: 'select' },
    },
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'body-2',
    children: 'Extensive APIs exchange information with external systems such as identity and access management, physical security, SIEMs, and HR apps to provide behavioral context and send data out to third-party tools and policy enforcement points.',
  },
};

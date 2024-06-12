import type { Meta, StoryObj } from '@storybook/react';
import Podcast from './podcast';

const meta = {
  title: 'Components/Podcast',
  component: Podcast,
} satisfies Meta<typeof Podcast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaNavLabel: 'Podcast listing',
    title: 'Listen and subscribe on your favorite platform',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import ListItem from '../list-item/list-item';
import * as ListItemStories from '../list-item/list-item.stories';
import List from './list';

const meta = {
  title: 'Components/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Secure Data Everywhere it Goes',
    subtitle: 'Eyebrow',
    children: Array.from({ length: 6 }, (_, i) => (
      <ListItem key={i} {...ListItemStories.Default.args} />
    )),
  },
};

export const Checkmark: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i} {...ListItemStories.Checkmark.args} />
    )),
  },
};

export const Icon: Story = {
  args: {
    children: Array.from({ length: 3 }, (_, i) => (
      <ListItem key={i} {...ListItemStories.Icon.args} />
    )),
  },
};

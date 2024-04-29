import type { Meta, StoryObj } from '@storybook/react';
import ListItem from './list-item';

const meta = {
  title: 'Components/List Item',
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Set, scale and automate policies from one place.',
    style: 'none',
    text: (
      <p>
        The industry leader, Forcepoint DLP offers the most trusted, automated
        enterprise data protection with over 1,700 pre-defined templates out of
        the box.
      </p>
    ),
    link: {
      title: 'Learn More',
      url: 'https://example.com/',
    },
  },
  render: (args) => (
    <ul className="list-none">
      <ListItem {...args} />
    </ul>
  ),
};

export const Checkmark: Story = {
  ...Default,
  args: {
    style: 'checkmark',
    text: (
      <p>
        Lorem ipsum dolor sit amet consectetur. Elementum egestas quam honcus
        sit non nunc turpis.
      </p>
    ),
  },
};

export const Icon: Story = {
  ...Default,
  args: {
    title: 'Figma ipsum component variant main layer. Scrolling flows.',
    style: 'icon',
    text: (
      <p>
        Fugiat laborum id culpa magna laboris dolor elit enim nostrud anim
        deserunt. Culpa proident veniam esse minim.
      </p>
    ),
    icon: {
      url: 'https://placehold.co/64x80',
      height: 80,
      width: 64,
    },
  },
};

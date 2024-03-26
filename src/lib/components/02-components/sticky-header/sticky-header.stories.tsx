import type { Meta, StoryObj } from '@storybook/react';
import StickyHeader from './sticky-header';

const meta = {
  title: 'Components/Sticky Header',
  component: StickyHeader,
} satisfies Meta<typeof StickyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerTitle: 'Cloud Access Security Broker',
    headerCtas: [
      {
        url: '#',
        title: 'Talk to an Expert',
        color: 'white',
      },
    ],
    showHeader: true,
    linkComponent: 'a',
    headerLogoAlt: 'Alt text',
  },
};

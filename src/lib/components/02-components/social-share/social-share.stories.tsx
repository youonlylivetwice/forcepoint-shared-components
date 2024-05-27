import type { Meta, StoryObj } from '@storybook/react';
import SocialShare from './social-share';

const meta = {
  title: 'Components/Social Share',
  component: SocialShare,
} satisfies Meta<typeof SocialShare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'https://www.example.com',
    title: 'Example Title',
    shareText: 'Share on',
    ariaNavLabel: 'Social media sharing',
  },
};

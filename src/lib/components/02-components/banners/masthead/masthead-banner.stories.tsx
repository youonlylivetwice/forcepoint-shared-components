import { Meta } from '@storybook/react';
import { useState } from 'react';
import MastheadBanner, { MastheadBannerProps } from './masthead-banner';

const meta = {
  title: 'Components/Banners/Masthead Banner',
  component: MastheadBanner,
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    linkDetails: { control: 'object' },
    backgroundColor: {
      control: {
        type: 'select',
        options: ['azure', 'violette', 'black', 'navy'],
      },
    },
    isCloseable: { control: 'boolean' },
    showBanner: { control: 'boolean' },
    handleClose: { action: 'handleClose' },
  },
} as Meta;

export default meta;

const Template = (args: MastheadBannerProps) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    setShowBanner(false);
  };

  return <MastheadBanner {...args} showBanner={showBanner} handleClose={handleClose} />;
};

export const Default = (args: MastheadBannerProps) => <Template {...args} />;
Default.args = {
  id: '1',
  title: 'Masthead Banner Title',
  linkDetails: {
    title: 'CTA Link',
    url: 'https://example.com',
  },
  backgroundColor: 'azure',
  isCloseable: true,
  showBanner: true,
};

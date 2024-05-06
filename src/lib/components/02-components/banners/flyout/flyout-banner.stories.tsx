import { Meta } from '@storybook/react';
import { useState } from 'react';
import FlyoutBanner, { FlyoutBannerProps } from './flyout-banner';

const meta = {
  title: 'Components/Banners/Flyout Banner',
  component: FlyoutBanner,
} as Meta;

export default meta;

const Template = (args: FlyoutBannerProps) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    setShowBanner(false);
  };

  const handleOpen = () => {
    setShowBanner(true);
  };

  const renderedIcon = (
    <div className="relative aspect-[16/9] overflow-hidden rounded-t-m">
      <img
        src="https://s3-alpha-sig.figma.com/img/04a4/8803/bf862ca1cf36f023977886c8906d28a9?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kClNX-NApDzFrub-FUAWubM4W1O3Tkd79ErluPp7UvVK421YbTFTzYBPBcrVEAOtsClaAYbr2qzwJL0nMVEDWow-A5RGc5v6KTSjSj~3dfzrDes3-PDx8~toUVP-PMjltHTNGvjaXUtD5jAZ0DmRlZAISUIj2p2vFfS4k4oKk2eG8AmPJkPRdVKyNAaCgk6VObvg0~KjyQBivQkIdWMXIAktxWd~nUFJEah7Y1OnhB7zcxRn334wOtaGOb6FlElI3wOFFA53m9VUEndgql7dM5ZEyIw5ZFJzOkX7swho3u72D95eeFyZujtelZRlkTPsBg~tjswNprCr7mEUVNPIhA__"
        alt="Description of the image"
      />
    </div>
  );

  return (
    <FlyoutBanner
      {...args}
      showBanner={showBanner}
      handleClose={handleClose}
      handleOpen={handleOpen}
      icon={renderedIcon}
    />
  );
};

export const Default = (args: FlyoutBannerProps) => <Template {...args} />;
Default.args = {
  id: '1',
  title: 'Example Banner Title',
  linkDetails: {
    title: 'Example Link',
    url: 'https://example.com',
  },
  toggleText: 'Toggle Banner',
  isMobile: false,
  date: {
    start: {
      time: '2024-04-25T12:00:00Z',
      fullDate: 'April 25, 2024',
    },
  },
  location: {
    city: 'City',
    state: 'State',
    country: 'Country',
  },
};

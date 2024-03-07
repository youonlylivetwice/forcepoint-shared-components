import type { Meta, StoryObj } from '@storybook/react';
import Callout from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    color: {
      options: ['white', 'black', 'navy', 'violette'],
      control: { type: 'select' },
    },
    image: {
      table: {
        disable: true,
      },
    },
    link: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'black',
    content:
      'Download the 2023 Gartner Market Guide for Data Loss Prevention. Learn the different  use cases and components of an industry-leading DLP solution.',
    eyebrow: 'Eyebrow',
    header: 'See Why Forcepoint is a Leader in DLP',
    image: {
      src: 'https://s3-alpha-sig.figma.com/img/de35/bded/7346543dd1a6fb32c4b52ceae5e55b7d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qhzaP3KNd-EXdu4KJz10LAtJNwxagZPMHbSLgT7WJxsjnu0n2~dLo~jzTmhjdhxZYrIWzjxxI00GShJsjAnbD5B5gVAqiWUada39glkZXWP1tOwU7ss2oUs4kddKzdq5NBm2jEg0xgkryqtnCEKd05f8OHe8LFeOwKSIocuwjdjnPUoGqf9atQpuRI3wKBN1rHtUdDeh~aITbOwgrPrGVJXyyPfySN~Mj7khdeQnpFGtA-g1iiccODWTfPE08iHjRl3rjj70nGwXpUcA9rUsSS~yAtwVsoJ4hLu9wtAMjH3dBn967ZRFya9SqlQ1Eauf32O3gwTPf3h4VKhdI8ZPrg__',
      alt: 'Analyst Acclaim',
    },
    link: {
      title: 'Secondary',
      url: '/',
    },
  },
};

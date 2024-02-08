import type { Meta, StoryObj } from '@storybook/react';
import FooterMenu from './footer-menu';

const menuItems = [
  {
    title: 'Products',
    below: [
      {
        title: 'Forcepoint ONE',
        url: '#',
        active: true,
      },
      {
        title: 'Enterprise Data Loss Prevention (DLP)',
        url: '#',
      },
      {
        title: 'Cloud Access Security Broker (CASB)',
        url: '#',
      },
      {
        title: 'Secure Web Gateway (SWG)',
        url: '#',
      },
      {
        title: 'Zero Trust Network Access (ZTNA)',
        url: '#',
      },
      {
        title: 'FlexEdge Secure SD-WAN',
        url: '#',
      },
      {
        title: 'All Products',
        url: '#',
      },
    ],
  },
  {
    title: 'Solutions',
    url: '#',
    below: [
      {
        title: 'Securing Data Everywhere',
        url: '#',
      },
      {
        title: 'Work Safely Anywhere with SASE',
        url: '#',
      },
      {
        title: 'Simplify Security with SASE',
        url: '#',
      },
      {
        title: 'Embrace ChatGPT and Protect Your Data',
        url: '#',
      },
      {
        title: 'Adopt Continuous Zero Trust Security',
        url: '#',
      },
      {
        title: 'Securely Enable Remote Workers',
        url: '#',
      },
      {
        title: 'All Solutions',
        url: '#',
      },
    ],
  },
  {
    title: 'Learn About',
    url: '#',
    below: [
      {
        title: 'Ultimate Guide to SASE',
        url: '#',
      },
      {
        title: 'Ultimate Guide to Data Security',
        url: '#',
      },
      {
        title: 'Spotlight Series (no link yet)',
        url: '#',
      },
      {
        title: 'Forcepoint E-Learning Courses',
        url: '#',
      },
      {
        title: 'Cyber EDU',
        url: '#',
      },
    ],
  },
  {
    title: 'Resources',
    url: '#',
    below: [
      {
        title: 'Customer Stories',
        url: '#',
      },
      {
        title: 'Blog',
        url: '#',
      },
      {
        title: 'Events',
        url: '#',
      },
      {
        title: 'AWS Partner',
        url: '#',
      },
      {
        title: 'Find a Partner',
        url: '#',
      },
      {
        title: 'Find a Distributor',
        url: '#',
      },
      {
        title: 'Forcepoint Customer Hub',
        url: '#',
      },
    ],
  },
  {
    title: 'Company',
    url: '#',
    below: [
      {
        title: 'Newsroom',
        url: '#',
      },
      {
        title: 'Work With Us',
        url: '#',
      },
      {
        title: 'Executive Team',
        url: '#',
      },
      {
        title: 'About Forcepoint',
        url: '#',
      },
      {
        title: 'Report a Vulnerability',
        url: '#',
      },
      {
        title: 'Contact Support',
        url: '#',
      },
      {
        title: 'Contact Sales',
        url: '#',
      },
    ],
  },
];

const meta = {
  title: 'Components/Menus/Footer Menu',
  component: FooterMenu,
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: menuItems,
  },
};
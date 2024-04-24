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
        class: null,
      },
      {
        title: 'Enterprise Data Loss Prevention (DLP)',
        url: '#',
        class: null,
      },
      {
        title: 'Cloud Access Security Broker (CASB)',
        url: '#',
        class: null,
      },
      {
        title: 'Secure Web Gateway (SWG)',
        url: '#',
        class: null,
      },
      {
        title: 'Zero Trust Network Access (ZTNA)',
        url: '#',
        class: null,
      },
      {
        title: 'FlexEdge Secure SD-WAN',
        url: '#',
        class: null,
      },
      {
        title: 'All Products',
        url: '#',
        class: 'font-bold md:font-bold text-blue pt-sm',
      },
    ],
  },
  {
    title: 'Solutions',
    below: [
      {
        title: 'Securing Data Everywhere',
        url: '#',
        class: null,
      },
      {
        title: 'Work Safely Anywhere with SASE',
        url: '#',
        class: null,
      },
      {
        title: 'Simplify Security with SASE',
        url: '#',
        class: null,
      },
      {
        title: 'Embrace ChatGPT and Protect Your Data',
        url: '#',
        class: null,
      },
      {
        title: 'Adopt Continuous Zero Trust Security',
        url: '#',
        class: null,
      },
      {
        title: 'Securely Enable Remote Workers',
        url: '#',
        class: null,
      },
      {
        title: 'All Solutions',
        url: '#',
        class: 'font-bold md:font-bold text-blue pt-sm',
      },
    ],
  },
  {
    title: 'Learn About',
    below: [
      {
        title: 'Ultimate Guide to SASE',
        url: '#',
        class: null,
      },
      {
        title: 'Ultimate Guide to Data Security',
        url: '#',
        class: null,
      },
      {
        title: 'Spotlight Series (no link yet)',
        url: '#',
        class: null,
      },
      {
        title: 'Forcepoint E-Learning Courses',
        url: '#',
        class: null,
      },
      {
        title: 'Cyber EDU',
        url: '#',
        class: null,
      },
    ],
  },
  {
    title: 'Resources',
    below: [
      {
        title: 'Customer Stories',
        url: '#',
        class: null,
      },
      {
        title: 'Blog',
        url: '#',
        class: null,
      },
      {
        title: 'Events',
        url: '#',
        class: null,
      },
      {
        title: 'AWS Partner',
        url: '#',
        class: null,
      },
      {
        title: 'Find a Partner',
        url: '#',
        class: null,
      },
      {
        title: 'Find a Distributor',
        url: '#',
        class: null,
      },
      {
        title: 'Forcepoint Customer Hub',
        url: '#',
        class: null,
      },
    ],
  },
  {
    title: 'Company Info & Support',
    url: '#',
    below: [
      {
        title: 'Newsroom',
        url: '#',
        class: null,
      },
      {
        title: 'Work With Us',
        url: '#',
        class: null,
      },
      {
        title: 'Executive Team',
        url: '#',
        class: null,
      },
      {
        title: 'About Forcepoint',
        url: '#',
        class: null,
      },
      {
        title: 'Report a Vulnerability',
        url: '#',
        class: null,
      },
      {
        title: 'Contact Support',
        url: '#',
        class: null,
      },
      {
        title: 'Contact Sales',
        url: '#',
        class: null,
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
    menuLabel: 'my-menu',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import CardComponent from './nav-highlight';

const meta = {
  title: 'Components/Cards/Nav Highlight',
  component: CardComponent,
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ctaButton: 'Learn More',
    description:
      'Data-First SASE starts with Forcepoint ONE. Protect data everywhere, secure access anywhere, and simplify security on one platform.',
    title: 'Forcepoint ONE SSE',
    url: '#',
    icon: {
      src: 'https://www.forcepoint.com/sites/default/files/fp_one_icon_0.svg?itok=eKi29PlI',
      alt: 'Forcepoint ONE SSE',
    },
    iconOnHover: {
      src: 'https://www.forcepoint.com/sites/default/files/fp_one_icon-hover_0.svg?itok=ecRnPBsZ',
      alt: 'Forcepoint ONE SSE',
    },
  },
};

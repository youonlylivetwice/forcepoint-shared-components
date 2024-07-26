import type { Meta, StoryObj } from '@storybook/react';
import LogoGrid, { LogoInfo } from './logo-grid';

const logoItems: LogoInfo[] = [
  {
    src: 'https://www.forcepoint.com/sites/default/files/styles/icon_default_small/public/icons/logo_6.png',
    alt: 'Boldon James',
  },
];

const meta = {
  title: 'Components/Logo Grid',
  component: LogoGrid,
} satisfies Meta<typeof LogoGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

function duplicateArrayItems(arr: LogoInfo[], times: number) {
  return arr.flatMap((item) => Array(times).fill(item));
}

export const Default: Story = {
  args: {
    title: 'Figma ipsum component variant main layer. Scrolling flows.',
    subtitle: 'Figma ipsum component variant main layer. Scrolling flows.',
    items: duplicateArrayItems(logoItems, 32),
  },
};

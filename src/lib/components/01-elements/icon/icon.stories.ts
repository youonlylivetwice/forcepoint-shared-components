import { Meta, StoryObj } from '@storybook/react';

import Icons from './icons';

const meta: Meta = {
  title: 'Elements/Icons',
  component: Icons,
} satisfies Meta<typeof Icons>;

const svgIcons = import.meta.glob('../../../../../assets/images/icons/*.svg');
const icons = [];

for (const key in svgIcons) {
  const icon = key.split('icons/')[1].split('.svg')[0];
  icons.push(icon);
}

export default meta;

export const Default: StoryObj = {
  args: {
    icons: icons,
  },
};

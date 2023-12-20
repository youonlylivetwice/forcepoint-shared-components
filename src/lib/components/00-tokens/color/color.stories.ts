import type { Meta, StoryObj } from '@storybook/react';
import ColorDisplay from './color';

const colorVariants = {
	navy: 'bg-navy',
	teal: 'bg-teal',
	violette: 'bg-violette',
	viola: 'bg-viola',
	veridian: 'bg-veridian',
	spring: 'bg-spring',
	blue: 'bg-blue',
	sky: 'bg-sky',
	sandwisp: 'bg-sandwisp',
	sol: 'bg-sol',
	crimson: 'bg-crimson',
	black: 'bg-black',
	grey: 'bg-grey',
	chateau: 'bg-chateau',
	brumosa: 'bg-brumosa',
	mercury: 'bg-mercury',
	azure: 'bg-azure',
	white: 'bg-white'
};

const meta = {
  title: 'Tokens/Brand Colors',
  component: ColorDisplay,
} satisfies Meta<typeof ColorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandColors: Story = {
  args: {
    colors: colorVariants,
  },
};

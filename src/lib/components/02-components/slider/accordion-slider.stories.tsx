import type { Meta, StoryObj } from '@storybook/react';
import AccordionSlider from './accordion-slider';

const meta = {
  title: 'Components/Sliders/Accordion Slider',
  component: AccordionSlider,
} satisfies Meta<typeof AccordionSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
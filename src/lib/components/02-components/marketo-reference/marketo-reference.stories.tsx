import type { Meta, StoryObj } from '@storybook/react';
import MarketoReference from './marketo-reference';

const meta = {
  title: 'Components/Marketo Reference',
  component: MarketoReference,
  tags: ['autodocs'],
} satisfies Meta<typeof MarketoReference>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderedForm = (
  <div className="h-3xl w-full bg-azure">
    <p className="text-center">External form</p>
  </div>
);

export const Default: Story = {
  args: {
    marketoForm: renderedForm,
    image: {
      src: 'https://forcepoint-drupal.lndo.site/sites/default/files/final_plea_opt_10_55.jpg',
      alt: 'image',
    },
    bgColor: 'azure',
    formStyle: 'aside_contained_image_overflow_top',
    contentClassName: 'mx-auto max-w-screen-xl',
  },
};

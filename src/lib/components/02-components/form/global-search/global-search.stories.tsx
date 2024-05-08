import type { Meta, StoryObj } from '@storybook/react';
import GlobalSearch from './global-search';

const meta = {
  title: 'Components/Form/GlobalSearch',
  component: GlobalSearch,
  tags: ['autodocs'],
} satisfies Meta<typeof GlobalSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectOptions = [
  { value: 'All', label: 'All' },
  { value: 'customer', label: 'Customer' },
  { value: 'education', label: 'Cyber Education Article' },
  { value: 'microsite', label: 'Microsite' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'product', label: 'Product' },
  { value: 'resource', label: 'Resource' },
  { value: 'solution', label: 'Solution' },
];

export const Default: Story = {
  args: {
    selectOptions: selectOptions,
    className: 'max-w-screen-xl p-lg',
  },
};

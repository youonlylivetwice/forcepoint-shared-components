import type { Meta, StoryObj } from '@storybook/react';
import Select from './select';

const meta = {
  title: 'Components/Form/Select',
  component: Select,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSelectField: Story = {
  args: {
    className: 'hs-fieldtype-select',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const SelectFieldWithError: Story = {
  args: {
    className: 'hs-fieldtype-select',
    options: ['Option 1', 'Option 2', 'Option 3'],
    hasError: true,
  },
};
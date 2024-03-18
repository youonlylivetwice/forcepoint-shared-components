import type { Meta, StoryObj } from '@storybook/react';
import CheckBoxInput from './checkbox';

const meta = {
  title: 'Components/Form/Checkbox',
  component: CheckBoxInput,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof CheckBoxInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckboxInput: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
  },
};

export const NavyCheckboxInput: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
    theme: 'navy-checkbox',
  },
};

export const DarkThemeCheckboxInput: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
    theme: 'dark-theme',
  },
};

export const DarkThemeNavyCheckboxInput: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
    theme: 'dark-theme navy-checkbox',
  },
};
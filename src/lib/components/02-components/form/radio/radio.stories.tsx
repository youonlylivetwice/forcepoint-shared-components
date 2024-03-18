import type { Meta, StoryObj } from '@storybook/react';
import RadioInput from './radio';

const meta = {
  title: 'Components/Form/Radio',
  component: RadioInput,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultRadioInput: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
  },
};

export const NavyRadioInput: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
    theme: 'navy-checkbox',
  },
};

export const RadioInputDarkTheme: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
    theme: 'dark-theme',
  },
};

export const NavyRadioInputDarkTheme: Story = {
  args: {
    label: 'I’d also like a live demo of Forcepoint solution',
    options: ['Option 1', 'Option 2', 'Option 3'],
    checked: false,
    theme: 'dark-theme navy-checkbox',
  },
};
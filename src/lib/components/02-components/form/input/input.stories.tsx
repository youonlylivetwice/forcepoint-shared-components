import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './input';

const meta = {
  title: 'Components/Form/TextInput',
  component: TextInput,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NameInput: Story = {
  args: {
    className: 'hs_name',
    placeholder: 'Enter your name',
  },
};

export const EmailInput: Story = {
  args: {
    className: 'hs_email',
    placeholder: 'Work email',
  },
};

export const PhoneInput: Story = {
  args: {
    className: 'hs_phone',
    placeholder: 'Phone Number',
  },
};

export const CompanyInput: Story = {
  args: {
    className: 'hs_company',
    placeholder: 'Company Name',
  },
};

export const JobTitleInput: Story = {
  args: {
    className: 'hs_jobtitle',
    placeholder: 'Job Title',
  },
};

export const InputWithError: Story = {
  args: {
    className: 'hs_name',
    placeholder: 'Enter your name',
    value: 'John Doe',
    hasError: true,
  },
};

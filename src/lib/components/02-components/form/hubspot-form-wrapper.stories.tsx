import type { Meta, StoryObj } from '@storybook/react';
import HubspotFormWrapper from './hubspot-form-wrapper';

const meta = {
  title: 'Components/HubspotFormWrapper',
  component: HubspotFormWrapper,
} satisfies Meta<typeof HubspotFormWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderedForm = (
  <div className="h-3xl w-full bg-azure">
    <p className="text-center">External form</p>
  </div>
);

export const Default: Story = {
  args: {
    headLine: 'Request Your Customized Demo',
    subHeadLine: 'Request Your Customized Demo',
    children: renderedForm,
  },
};

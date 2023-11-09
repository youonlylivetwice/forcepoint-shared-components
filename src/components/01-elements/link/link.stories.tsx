import { Meta, StoryObj } from "@storybook/react";
import Link from "./link";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Elements/Link",
  argTypes: {},
};
export default meta;


type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Link',
  },
};

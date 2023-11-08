import { Meta, StoryObj } from "@storybook/react";
import Color from "./color";

const meta: Meta<typeof Color> = {
  component: Color,
  title: "Tokens/Color",
  argTypes: {},
};
export default meta;


type Story = StoryObj<typeof Color>;

export const Default: Story = {
  args: {
    color: 'test',
    name: 'test',
    hex: 'test'
  },
};

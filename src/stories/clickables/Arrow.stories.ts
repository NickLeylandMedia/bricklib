import type { Meta, StoryObj } from "@storybook/react";

import Arrow from "../../components/clickables/arrow/Arrow";

const meta: Meta<typeof Arrow> = {
  component: Arrow,
};

export default meta;
type Story = StoryObj<typeof Arrow>;

export const Button: Story = {
  args: {
    type: "button",
  },
};

export const Link: Story = {
  args: {
    type: "link",
  },
};

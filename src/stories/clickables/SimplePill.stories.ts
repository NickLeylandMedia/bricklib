import type { Meta, StoryObj } from "@storybook/react";

import SimplePill from "../../components/clickables/simplePill/SimplePill";

const meta: Meta<typeof SimplePill> = {
  component: SimplePill,
};

export default meta;
type Story = StoryObj<typeof SimplePill>;

export const Universal: Story = {
  args: {},
};

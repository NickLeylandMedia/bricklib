import type { Meta, StoryObj } from "@storybook/react";

import SimpleSquare from "../../components/clickables/simpleSquare/SimpleSquare";

const meta: Meta<typeof SimpleSquare> = {
  component: SimpleSquare,
};

export default meta;
type Story = StoryObj<typeof SimpleSquare>;

export const Universal: Story = {
  args: {},
};

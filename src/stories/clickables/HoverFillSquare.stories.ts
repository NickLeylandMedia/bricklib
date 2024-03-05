import type { Meta, StoryObj } from "@storybook/react";

import HoverFillSquare from "../../components/clickables/hoverFillSquare/HoverFillSquare";

const meta: Meta<typeof HoverFillSquare> = {
  component: HoverFillSquare,
};

export default meta;
type Story = StoryObj<typeof HoverFillSquare>;

export const Universal: Story = {
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react";

import ColorChangeBorderToggleSquare from "../../components/clickables/colorChangeBorderToggleSquare/ColorChangeBorderToggleSquare";

const meta: Meta<typeof ColorChangeBorderToggleSquare> = {
  component: ColorChangeBorderToggleSquare,
};

export default meta;
type Story = StoryObj<typeof ColorChangeBorderToggleSquare>;

export const Universal: Story = {
  args: {
    active: true,
  },
};

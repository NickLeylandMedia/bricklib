import type { Meta, StoryObj } from "@storybook/react";

import ColorChangeBorderSquare from "../../components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";

const meta: Meta<typeof ColorChangeBorderSquare> = {
  component: ColorChangeBorderSquare,
};

export default meta;
type Story = StoryObj<typeof ColorChangeBorderSquare>;

export const Universal: Story = {
  args: {
    buttonColor: "orangeWhite",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import ColorChangeSquare from "../../components/clickables/colorChangeSquare/ColorChangeSquare";

const meta: Meta<typeof ColorChangeSquare> = {
  component: ColorChangeSquare,
};

export default meta;
type Story = StoryObj<typeof ColorChangeSquare>;

export const Universal: Story = {
  args: {
    buttonColor: "orangeWhite",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import ImageWithText from "../../components/blocks/imageWithText/ImageWithText";

const meta: Meta<typeof ImageWithText> = {
  component: ImageWithText,
};

export default meta;
type Story = StoryObj<typeof ImageWithText>;

export const Primary: Story = {
  args: {},
};

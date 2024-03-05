import type { Meta, StoryObj } from "@storybook/react";

import PictureCard from "../../components/cards/pictureCard/PictureCard";

const meta: Meta<typeof PictureCard> = {
  component: PictureCard,
};

export default meta;
type Story = StoryObj<typeof PictureCard>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};

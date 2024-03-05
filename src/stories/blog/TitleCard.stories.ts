import type { Meta, StoryObj } from "@storybook/react";

import TitleCard from "../../components/blog/titleCard/TitleCard";

const meta: Meta<typeof TitleCard> = {
  component: TitleCard,
};

export default meta;
type Story = StoryObj<typeof TitleCard>;

export const NoData: Story = {
  args: {
    title: "Swallowing The Rabbit Whole By Code Orange",
    image:
      "https://i.pinimg.com/736x/c1/d7/48/c1d748b2356c6fe36bbe1e9ac4635366.jpg",
    alt: "Title Card",
  },
};

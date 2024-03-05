import type { Meta, StoryObj } from "@storybook/react";

import PortraitGrid from "../../components/blog/portraitGrid/PortraitGrid";

const meta: Meta<typeof PortraitGrid> = {
  component: PortraitGrid,
};

export default meta;
type Story = StoryObj<typeof PortraitGrid>;

export const NoItems: Story = {
  args: {},
};

export const Populated: Story = {
  args: {
    maxColumns: 4,
    textClass: "primary",
    items: [
      {
        image:
          "https://i.pinimg.com/736x/c1/d7/48/c1d748b2356c6fe36bbe1e9ac4635366.jpg",
        link: "",
        title: "Halo 3",
      },
      {},
      {},
      {},
      {},
    ],
  },
};

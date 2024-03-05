import type { Meta, StoryObj } from "@storybook/react";

import NoCardTitle from "../../components/blog/noCardTitle/NoCardTitle";

const meta: Meta<typeof NoCardTitle> = {
  component: NoCardTitle,
};

export default meta;
type Story = StoryObj<typeof NoCardTitle>;

export const NoData: Story = {
  args: {
    title: "Exploring Alaska",
    subTitle: "A Journey to the Last Frontier",
    image:
      "https://i.pinimg.com/736x/c1/d7/48/c1d748b2356c6fe36bbe1e9ac4635366.jpg",
    alt: "Title Card",
    imgHeight: 600,
    imgWidth: 800,
  },
};

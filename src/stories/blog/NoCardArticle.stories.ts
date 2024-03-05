import type { Meta, StoryObj } from "@storybook/react";

import NoCardArticle from "../../components/blog/noCardArticle/NoCardArticle";

const meta: Meta<typeof NoCardArticle> = {
  component: NoCardArticle,
};

export default meta;
type Story = StoryObj<typeof NoCardArticle>;

export const NoData: Story = {
  args: {
    title: "Exploring Alaska",
    img: "https://i.pinimg.com/736x/c1/d7/48/c1d748b2356c6fe36bbe1e9ac4635366.jpg",
    alt: "Title Card",
    imgHeight: 600,
    imgWidth: 800,
  },
};

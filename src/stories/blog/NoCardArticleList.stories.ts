import type { Meta, StoryObj } from "@storybook/react";

import NoCardArticleList from "../../components/blog/noCardArticleList/NoCardArticleList";

const meta: Meta<typeof NoCardArticleList> = {
  component: NoCardArticleList,
};

export default meta;
type Story = StoryObj<typeof NoCardArticleList>;

export const NoArticles: Story = {
  args: {
    items: [],
  },
};

export const Populated: Story = {
  args: {
    items: [
      {
        img: "https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg",
        title: "Article 1",
        text: "Summary of article 1",
      },
      {
        img: "https://via.placeholder.com/150",
        title: "Article 2",
        text: "Summary of article 2",
      },
      {
        img: "https://via.placeholder.com/150",
        title: "Article 3",
        text: "Summary of article 3",
      },
      {
        img: "https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg",
        title: "Article 1",
        text: "Summary of article 1",
      },
      {
        img: "https://via.placeholder.com/150",
        title: "Article 2",
        text: "Summary of article 2",
      },
      {
        img: "https://via.placeholder.com/150",
        title: "Article 3",
        text: "Summary of article 3",
      },
      {
        img: "https://via.placeholder.com/150",
        title: "Article 3",
        text: "Summary of article 3",
      },
    ],
  },
};

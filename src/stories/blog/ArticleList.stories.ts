import type { Meta, StoryObj } from "@storybook/react";

import ArticleList from "../../components/blog/articleList/ArticleList";

const meta: Meta<typeof ArticleList> = {
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const NoArticles: Story = {
  args: {
    articles: [],
    orientation: "vertical",
  },
};

export const Horizontal: Story = {
  args: {
    articles: [
      {
        image: "https://via.placeholder.com/150",
        title: "Article 1",
        summary: "Summary of article 1",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 2",
        summary: "Summary of article 2",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 3",
        summary: "Summary of article 3",
      },
    ],
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    articles: [
      {
        image: "https://via.placeholder.com/150",
        title: "Article 1",
        summary: "Summary of article 1",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 2",
        summary: "Summary of article 2",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 3",
        summary: "Summary of article 3",
      },
    ],
    orientation: "vertical",
  },
};

export const ReversedHorizontal: Story = {
  args: {
    articles: [
      {
        image: "https://via.placeholder.com/150",
        title: "Article 1",
        summary: "Summary of article 1",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 2",
        summary: "Summary of article 2",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 3",
        summary: "Summary of article 3",
      },
    ],
    orientation: "horizontal",
    reverseHorizontal: true,
  },
};

export const AlternatingHorizontal: Story = {
  args: {
    articles: [
      {
        image: "https://via.placeholder.com/150",
        title: "Article 1",
        summary: "Summary of article 1",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 2",
        summary: "Summary of article 2",
      },
      {
        image: "https://via.placeholder.com/150",
        title: "Article 3",
        summary: "Summary of article 3",
      },
    ],
    orientation: "horizontal",
    alternateHorizontal: true,
  },
};

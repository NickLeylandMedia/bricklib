import type { Meta, StoryObj } from "@storybook/react";

import BadgeGrid from "../../components/grids/badgeGrid/BadgeGrid";

const meta: Meta<typeof BadgeGrid> = {
  component: BadgeGrid,
};

export default meta;
type Story = StoryObj<typeof BadgeGrid>;

export const Primary: Story = {
  args: {
    badgeType: "withText",
    items: [
      {
        text: "The Home Depot",
        link: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png",
        alt: "",
      },
      {
        text: "DJI",
        link: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/DJI_Innovations_logo.svg/1280px-DJI_Innovations_logo.svg.png",
        alt: "",
      },
      {
        text: "Bambu Labs",
        link: "",
        image:
          "https://miro.medium.com/v2/resize:fit:1200/0*GjPvWtOXv43SeVS3.png",
        alt: "",
      },
    ],
    maxColumns: 3,
  },
};

export const PictureOnly: Story = {
  args: {
    badgeType: "picOnly",
    items: [
      {
        text: "The Home Depot",
        link: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1020px-TheHomeDepot.svg.png",
        alt: "",
      },
      {
        text: "DJI",
        link: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/DJI_Innovations_logo.svg/1280px-DJI_Innovations_logo.svg.png",
        alt: "",
      },
      {
        text: "Bambu Labs",
        link: "",
        image:
          "https://miro.medium.com/v2/resize:fit:1200/0*GjPvWtOXv43SeVS3.png",
        alt: "",
      },
    ],
    maxColumns: 3,
  },
};

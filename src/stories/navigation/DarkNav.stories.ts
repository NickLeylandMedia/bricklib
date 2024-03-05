import type { Meta, StoryObj } from "@storybook/react";

import DarkNav from "../../components/navigation/darkNav/DarkNav";

const meta: Meta<typeof DarkNav> = {
  component: DarkNav,
};

export default meta;
type Story = StoryObj<typeof DarkNav>;

export const Primary: Story = {
  args: {
    links: [
      { text: "Home", url: "/", fontClass: "primary", icon: "home" },
      { text: "About", url: "/about", fontClass: "primary", icon: "about" },
      {
        text: "Media",
        url: "/projects",
        fontClass: "primary",
        icon: "projects",
      },
      {
        text: "Contact",
        url: "/contact",
        fontClass: "primary",
        icon: "contact",
      },
      {
        text: "Blog",
        url: "/blog",
        fontClass: "primary",
        icon: "blog",
      },
      {
        text: "Shop",
        url: "/shop",
        fontClass: "primary",
        icon: "shop",
      },
    ],
  },
};

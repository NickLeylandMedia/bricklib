import type { Meta, StoryObj } from "@storybook/react";

import ActionBar from "../../components/navigation/actionBar/ActionBar";

const meta: Meta<typeof ActionBar> = {
  component: ActionBar,
};

export default meta;
type Story = StoryObj<typeof ActionBar>;

export const Primary: Story = {
  args: {
    items: [
      { text: "Photography" },
      { text: "Videography" },
      { text: "Films" },
    ],
    sorter: true,
    sortType: "inclusive",
    callback: (payload: any) => console.log("Action"),
  },
};

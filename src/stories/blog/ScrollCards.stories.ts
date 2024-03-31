import type { Meta, StoryObj } from "@storybook/react";

import ScrollCards from "../../components/blog/scrollCards/ScrollCards";

const meta: Meta<typeof ScrollCards> = {
  component: ScrollCards,
};

export default meta;
type Story = StoryObj<typeof ScrollCards>;

export const NoData: Story = {
  args: {},
};

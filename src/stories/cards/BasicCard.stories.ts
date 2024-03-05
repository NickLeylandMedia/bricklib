import type { Meta, StoryObj } from "@storybook/react";

import BasicCard from "../../components/cards/basicCard/BasicCard";

const meta: Meta<typeof BasicCard> = {
  component: BasicCard,
};

export default meta;
type Story = StoryObj<typeof BasicCard>;

export const Primary: Story = {
  args: {},
};

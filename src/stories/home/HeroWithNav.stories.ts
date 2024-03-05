import type { Meta, StoryObj } from "@storybook/react";

import HeroWithNav from "../../components/home/heroWithNav/HeroWithNav";

const meta: Meta<typeof HeroWithNav> = {
  component: HeroWithNav,
};

export default meta;
type Story = StoryObj<typeof HeroWithNav>;

export const Primary: Story = {
  args: {},
};

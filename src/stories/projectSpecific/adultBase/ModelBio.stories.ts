import type { Meta, StoryObj } from "@storybook/react";

import ModelBio from "../../../components/projectSpecific/adultBase/modelBio/ModelBio";

const meta: Meta<typeof ModelBio> = {
  component: ModelBio,
};

export default meta;
type Story = StoryObj<typeof ModelBio>;

export const Primary: Story = {
  args: {},
};

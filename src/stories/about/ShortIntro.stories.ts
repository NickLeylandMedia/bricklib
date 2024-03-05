import type { Meta, StoryObj } from "@storybook/react";

import ShortIntro from "../../components/about/shortIntro/ShortIntro";

const meta: Meta<typeof ShortIntro> = {
  component: ShortIntro,
};

export default meta;
type Story = StoryObj<typeof ShortIntro>;

export const Primary: Story = {
  args: {
    imgHeight: 400,
    imgWidth: 400,
  },
};

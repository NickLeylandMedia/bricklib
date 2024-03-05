import type { Meta, StoryObj } from "@storybook/react";

import Uploader from "../../components/upload/uploader/Uploader";

import SimpleSquare from "../../components/clickables/simpleSquare/SimpleSquare";

const meta: Meta<typeof Uploader> = {
  component: Uploader,
};

export default meta;
type Story = StoryObj<typeof Uploader>;

export const Primary: Story = {
  args: {
    buttonElement: (
      <SimpleSquare
        text="Select"
        textColor="light"
        type="button"
        buttonColor="blue"
      />
    ),
  },
};

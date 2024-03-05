import type { Meta, StoryObj } from "@storybook/react";

import Parser from "../../components/upload/parser/Parser";

import SimpleSquare from "../../components/clickables/simpleSquare/SimpleSquare";

const meta: Meta<typeof Parser> = {
  component: Parser,
};

export default meta;
type Story = StoryObj<typeof Parser>;

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

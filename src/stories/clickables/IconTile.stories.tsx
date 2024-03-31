import type { Meta, StoryObj } from "@storybook/react";

import IconTile from "../../components/clickables/iconTile/IconTile";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const meta: Meta<typeof IconTile> = {
  component: IconTile,
};

export default meta;
type Story = StoryObj<typeof IconTile>;

export const RightRed: Story = {
  args: {
    icon: <FaChevronRight className="twentyFive light" />,
    backgroundColor: "mvs-red",
    rounded: true,
  },
};

export const LeftGray: Story = {
  args: {
    icon: <FaChevronLeft className="twentyFive light" />,
    backgroundColor: "gray",
    rounded: true,
  },
};

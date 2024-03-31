import type { Meta, StoryObj } from "@storybook/react";

import SorterGallery from "../../components/media/sorterGallery/SorterGallery";

const meta: Meta<typeof SorterGallery> = {
  component: SorterGallery,
};

export default meta;
type Story = StoryObj<typeof SorterGallery>;

export const Primary: Story = {
  args: {
    header: "Header",
    textColor: "light",
    maxColumns: 4,
    callback: (payload: any) => console.log("Action"),
    sorterOptions: [
      { text: "Photography" },
      { text: "Videography" },
      { text: "Films" },
    ],
    galleryItems: [
      {
        url: "https://nick-leyland.com/_next/static/media/rain.7790f617.png",
        alt: "Rain",
      },
      {
        url: "https://t4.ftcdn.net/jpg/06/14/46/77/360_F_614467744_7eLjYhKWJIvnu8fk8MTp9VXFYpB15J3p.jpg",
        alt: "Sunset2",
      },
      {
        url: "https://cdn.vox-cdn.com/thumbor/Al48-pEnyIn2rlgKX7MIHNmlE68=/0x0:5563x3709/1200x800/filters:focal(2302x1311:3192x2201)/cdn.vox-cdn.com/uploads/chorus_image/image/65752607/1048232144.jpg.0.jpg",
        alt: "Sunset3",
      },
      {
        url: "https://thirdeyemom.com/wp-content/uploads/2017/08/img_2197.jpg",
        alt: "Sunset4",
      },
      {
        url: "https://www.popsci.com/uploads/2018/12/10/QKOPUFKJMVV7JE2YNBCV2FILFQ.jpg?auto=webp&width=785&height=523.12890625",
        alt: "Sunset5",
      },
    ],
  },
};

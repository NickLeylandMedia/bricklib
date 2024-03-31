/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import BasicFooter from "@/components/footers/basicFooter/BasicFooter";
import Gallery from "@/components/media/gallery/Gallery";
import HeroWithNav from "@/components/home/heroWithNav/HeroWithNav";
import ShortIntro from "@/components/about/shortIntro/ShortIntro";
import SimpleSquare from "@/components/clickables/simpleSquare/SimpleSquare";

/* Module Imports */

/* Component Interfaces */
interface Props {}

/* Component */
const Home: React.FC<Props> = () => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className="Home page">
      {/* Header Start */}
      <header>
        <HeroWithNav
          header="Nick Leyland"
          subHeader="Landscape Photographer and Filmmaker"
          smallImage="https://nick-leyland.com/_next/static/media/rain.7790f617.png"
          largeImage="https://nick-leyland.com/_next/static/media/boulder.c621920e.jpg"
          links={[
            { url: "/", text: "Home" },
            { url: "/blog", text: "Blog" },
            { url: "/media", text: "Media" },
            { url: "/about", text: "About" },
            { url: "/shop", text: "Shop" },
            { url: "/links", text: "Links" },
          ]}
        />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent">
        <ShortIntro
          alt="Nick Leyland - Landscape Photographer"
          header="Hi! I'm Nick"
          image=""
          imgHeight={600}
          imgWidth={600}
          imageBorderColor="red"
          textColor="light"
          bioText="For the last few years I have been traveling around the United States chasing my passions for photography and videography. Along the way, I've seen some incredible sights, and made memories that will last a lifetime. On this site I share my photos, videos, and stories from my travels!"
        />
        <Gallery
          items={[
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
          ]}
          maxColumns={5}
          textAlign="center"
          showLink={true}
          header="Gallery"
          textColor="light"
          linkComponent={
            <SimpleSquare
              buttonColor="red"
              textColor="light"
              text="See All"
              type="link"
            />
          }
        />
      </div>
      {/* Content End */}
      {/* Footer Start */}
      <BasicFooter topBorderColor="red" />
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Export Statement */
export default Home;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ImageMain.module.scss";

/* Image Imports */

/* Component Imports */
import GlowIcon from "@/components/clickables/glowIcon/GlowIcon";
import ShortIntro from "@/components/about/shortIntro/ShortIntro";
import VideoCard from "@/components/cards/videoCard/VideoCard";
import IconColorChangeBorderToggleSquare from "@/components/clickables/iconColorChangeBorderToggleSquare/IconColorChangeBorderToggleSquare";

/* Module Imports */

/* Component Interfaces */
interface Props {
  bioAlt: string;
  bioImage: string;
  bioText: string;
  bgImage: string;
  header: string;
  subHeader: string;
}

/* Component */
const ImageMain: React.FC<Props> = ({
  bgImage,
  bioAlt,
  bioImage,
  bioText,
  header,
  subHeader,
}) => {
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
    <div
      className={styles.ImageMain}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.info}>
        <h1 className="primary">{header}</h1>
        <h2 className="secondary">{subHeader}</h2>
        <ShortIntro
          alt={bioAlt}
          header="Hi! I'm Nick!"
          image={bioImage}
          imgHeight={1920}
          imgWidth={1080}
          imageBorderColor="red"
          bioText={bioText}
          textColor="light"
        />
        <VideoCard
          height={720}
          width={1280}
          image="https://via.placeholder.com/1280x720"
          alt="Video Placeholder"
          slug="/media"
          date="2021-09-01"
          duration="1:30"
          title="Video Title"
          description="This is a video description. It is a brief summary of the video content. It should be concise and informative."
        />
        <IconColorChangeBorderToggleSquare
          key={Math.random()}
          active={false}
          color={"mvs-red"}
          text={"Button"}
          activeAction={() => console.log("Active")}
          inactiveAction={() => console.log("Inactive")}
        />
      </div>
    </div>
  );
};

/* Export Statement */
export default ImageMain;

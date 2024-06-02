/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./VideoGallery.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  maxColumns: 2 | 3 | 4 | 5;
  textAlign?: "left" | "center" | "right";
  textColor?: "light" | "dark";
  showLink?: true;
  linkComponent?: React.ReactNode;
  linkText?: string;
  width?: "standard" | "nearFull";
}

/* Component */
const VideoGallery: React.FC<Props> = ({
  width,
  textAlign,
  header,
  textColor,
}) => {
  /* State Variables */

  /* End State Variables */

  /* Render Variables */
  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };

  const columnRef = {
    2: "maxTwoColumns",
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
  };
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.VideoGallery} ${width ? widthRef[width] : null}`}>
      {header ? (
        <h2
          className={`primary ${textAlign ? textAlign : "left"} ${
            textColor ? textColor : "light"
          }`}
        >
          {header}
        </h2>
      ) : null}
    </div>
  );
};

/* Export Statement */
export default VideoGallery;

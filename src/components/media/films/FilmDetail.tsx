/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./FilmDetail.module.scss";

/* Image Imports */

/* Component Imports */
import YouTube from "react-youtube";

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  textAlign: "left" | "center" | "right";
  textColor: "light" | "dark";
  videoID: string;
  videoDate: string;
  videoDescription: string;
  width?: "standard" | "nearFull";
}

/* Component */
const FilmDetail: React.FC<Props> = ({
  videoID,
  textAlign,
  textColor,
  header,
  width,
  videoDate,
  videoDescription,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.FilmDetail} ${width ? widthRef[width] : null}`}>
      {header ? (
        <h2
          className={`primary ${textAlign ? textAlign : "left"} ${
            textColor ? textColor : "light"
          }`}
        >
          {header}
        </h2>
      ) : null}
      <div className={styles.videoContainer}>
        <YouTube videoId={videoID} />
      </div>
      <p className={`${textColor}`}>Published On: {videoDate}</p>
      <p className={`${textColor}`}>{videoDescription}</p>
    </div>
  );
};

/* Export Statement */
export default FilmDetail;

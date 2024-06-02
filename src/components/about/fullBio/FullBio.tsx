/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./FullBio.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import TextRenderer from "@/components/global/textRenderer/TextRenderer";

/* Module Imports */

/* Component Interfaces */
interface Props {
  width?: "standard" | "nearFull";
  textColor: "light" | "dark";
  headerAlignment: "left" | "center" | "right";
  bio: any;
  photo: string;
  photoAlt: string;
  header?: string;
}

/* Component */
const FullBio: React.FC<Props> = ({
  textColor,
  width,
  bio,
  photo,
  photoAlt,
  header,
  headerAlignment,
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
    <div className={`${styles.FullBio} ${width ? widthRef[width] : null}`}>
      <h1 className={`primary ${textColor} ${headerAlignment}`}>
        {header ? header : "About Me"}
      </h1>
      <Image
        className={styles.photo}
        src={photo}
        alt={photoAlt}
        height={300}
        width={300}
      />
      <TextRenderer textColor="light" body={bio} TOCenabled={false} />
    </div>
  );
};

/* Export Statement */
export default FullBio;

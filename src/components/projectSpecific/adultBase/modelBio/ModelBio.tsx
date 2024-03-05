/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ModelBio.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";

/* Module Imports */

/* Component Interfaces */
interface Props {
  name: string;
  image: string;
  alt: string;
  imgHeight: number;
  imgWidth: number;
}

/* Component */
const ModelBio: React.FC<Props> = ({
  alt,
  image,
  imgHeight,
  imgWidth,
  name,
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
    <div className={styles.ModelBio}>
      <div className={styles.titleImageBox}>
        <h1 className="primary">{name ? name : "Name"}</h1>
        <Image height={imgHeight} width={imgWidth} src={image} alt={alt} />
      </div>
    </div>
  );
};

/* Export Statement */
export default ModelBio;

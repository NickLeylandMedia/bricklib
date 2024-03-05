/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./SorterGallery.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  textColor: "light" | "dark";
  sorterOptions: any[];
  galleryItems: any[];
}

/* Component */
const SorterGallery: React.FC<Props> = ({ header, textColor }) => {
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
    <div className={styles.SorterGallery}>
      <h2 className={`primary ${textColor}`}>{header ? header : "Header"}</h2>
      <select className={styles.mediaDropdown} name="" id=""></select>
      <div className={styles.fullSizeSorter}></div>
    </div>
  );
};

/* Export Statement */
export default SorterGallery;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./SorterGallery.module.scss";

/* Image Imports */

/* Component Imports */
import ActionBar from "../../navigation/actionBar/ActionBar";
import Gallery from "../gallery/Gallery";

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  textColor: "light" | "dark";
  sorterOptions: any[];
  galleryItems: any[];
  maxColumns: 2 | 3 | 4 | 5;
  showLink?: true;
  callback: (payload: any) => void;
  link?: string;
  width?: "standard" | "nearFull";
  initialActive?: string;
}

/* Component */
const SorterGallery: React.FC<Props> = ({
  header,
  sorterOptions,
  galleryItems,
  maxColumns,
  textColor,
  showLink,
  callback,
  link,
  width,
  initialActive,
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
    <div
      className={`markonus ${styles.SorterGallery} ${
        width ? widthRef[width] : null
      }`}
    >
      <div className={`markonus`}></div>
      <h2 className={`primary ${textColor}`}>{header ? header : "Header"}</h2>
      {/* <select className={styles.mediaDropdown} name="" id=""></select> */}
      <div className={styles.fullSizeSorter}>
        <ActionBar
          items={sorterOptions}
          maxColumns={3}
          color="mvs-red"
          callback={callback}
          initialActive={initialActive}
          sorter
        />
        <Gallery
          items={galleryItems}
          maxColumns={maxColumns}
          showLink={showLink}
          link={link}
        />
      </div>
    </div>
  );
};

/* Export Statement */
export default SorterGallery;

/* Library Imports */
//React
import React, { ReactNode } from "react";

/* Stylesheet Imports */
import styles from "./Gallery.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "../../../components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import Image from "next/image";

/* Module Imports */
import { motion } from "framer-motion";

/* Component Interfaces */
interface Props {
  items: any[];
  header?: string;
  maxColumns: 2 | 3 | 4 | 5;
  textAlign?: "left" | "center" | "right";
  textColor?: "light" | "dark";
  showLink?: true;
  linkComponent?: ReactNode;
  linkText?: string;
  link?: string;
  spacing?: "5px" | "10px" | "15px" | "20px";
  aspectRatio?: "16 / 9" | "4/3" | "1/1";
  width?: "standard" | "nearFull";
  imgBorder?: "white" | "darkGray" | "black";
}

/* Component */
const Gallery: React.FC<Props> = ({
  aspectRatio,
  header,
  items,
  maxColumns,
  textAlign,
  textColor,
  linkComponent,
  spacing,
  width,
  imgBorder,
  linkText,
  link,
  showLink,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedItems: any = (
    <p className={styles.galleryPlaceholder}>No items to display!</p>
  );

  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };

  const imgBorderRef = {
    white: "1px solid white",
    darkGray: "1px solid dimgray",
    black: "1px solid black",
  };

  const columnRef = {
    2: "maxTwoColumns",
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
  };

  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedItems = items.map((item) => {
      return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <Image
            src={item.url || item.image || item.photo}
            alt={item.alt}
            className={styles.galleryItem}
            style={{
              aspectRatio: `${aspectRatio ? aspectRatio : "1/1"}`,
              border: `${imgBorder ? imgBorderRef[imgBorder] : null}`,
            }}
            height={720}
            width={1280}
          />
        </motion.div>
      );
    });
  }

  /* End Render Logic */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.Gallery} ${width ? widthRef[width] : null}`}>
      {header ? (
        <h2
          className={`primary ${textAlign ? textAlign : "left"} ${
            textColor ? textColor : "light"
          }`}
        >
          {header}
        </h2>
      ) : null}
      <div
        style={{ gap: `${spacing ? spacing : "0px"}` }}
        className={`${styles.galleryContainer} ${
          maxColumns ? columnRef[maxColumns] : "maxFourColumns"
        }`}
      >
        {renderedItems}
      </div>
      {showLink ? (
        <div className={styles.galleryLink}>
          {linkComponent ? (
            linkComponent
          ) : (
            <ColorChangeBorderSquare
              type="link"
              buttonColor="mvs-red"
              link={link ? link : "/gallery"}
              text={linkText ? linkText : "See All Images"}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

/* Export Statement */
export default Gallery;

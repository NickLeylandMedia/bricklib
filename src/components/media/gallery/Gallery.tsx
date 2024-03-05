/* Library Imports */
//React
import React, { ReactNode } from "react";

/* Stylesheet Imports */
import styles from "./Gallery.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";

/* Module Imports */

/* Component Interfaces */
interface Props {
  items: any[];
  header?: string;
  maxColumns: 2 | 3 | 4 | 5;
  textAlign: "left" | "center" | "right";
  textColor: "light" | "dark";
  showLink: boolean;
  linkComponent: ReactNode;
}

/* Component */
const Gallery: React.FC<Props> = ({
  header,
  items,
  maxColumns,
  textAlign,
  textColor,
  linkComponent,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedItems: any = (
    <p className={styles.galleryPlaceholder}>No items to display!</p>
  );

  const columnRef = {
    2: "maxTwoColumns",
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
  };

  console.log(columnRef[maxColumns]);
  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedItems = items.map((item) => {
      return (
        <Image
          src={item.url}
          alt={item.alt}
          className={styles.galleryItem}
          height={720}
          width={1280}
        />
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
    <div className={styles.Gallery}>
      {header ? (
        <h2 className={`primary ${textAlign} ${textColor}`}>{header}</h2>
      ) : null}
      <div className={`${styles.galleryContainer} ${columnRef[maxColumns]}`}>
        {renderedItems}
      </div>
      <div className={styles.galleryLink}>{linkComponent}</div>
    </div>
  );
};

/* Export Statement */
export default Gallery;

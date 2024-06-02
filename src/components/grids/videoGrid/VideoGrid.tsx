/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./VideoGrid.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "@/components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import VideoCard from "@/components/cards/videoCard/VideoCard";

/* Module Imports */

/* Component Interfaces */
interface Props {
  maxColumns: 3 | 4 | 5 | 6 | 7;
  textAlign?: "left" | "center" | "right";
  textColor: "light" | "dark";
  header?: string;
  showHeader?: true;
  showLink?: true;
  linkComponent?: React.ReactNode;
  linkText?: string;
  link?: string;
  width?: "standard" | "nearFull";
  items: any[];
}

/* Component */
const VideoGrid: React.FC<Props> = ({
  items,
  width,
  maxColumns,
  header,
  textColor,
  showLink,
  linkComponent,
  linkText,
  link,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedItems: any = <p>No items to display!</p>;

  const columnRef = {
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
    6: "maxSixColumns",
    7: "maxSevenColumns",
  };

  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };
  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedItems = items.map((item, index) => {
      return (
        <VideoCard
          key={Math.random()}
          height={720}
          width={1280}
          image={item.image}
          alt={item.title}
          slug={`/media/videos/${item.id}`}
          title={item.title}
          description={item?.description}
          date={item.publishedAt}
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
    <div className={`${styles.VideoGrid} ${width ? widthRef[width] : null} `}>
      {header ? (
        <h2 className={`primary ${textColor ? textColor : "light"}`}>
          {header}
        </h2>
      ) : null}
      <div
        className={`${styles.gridContainer} ${
          maxColumns ? columnRef[maxColumns] : columnRef[3]
        }`}
      >
        {renderedItems}
      </div>
      <div className={styles.linkContainer}>
        {showLink ? (
          linkComponent ? (
            linkComponent
          ) : (
            <ColorChangeBorderSquare
              buttonColor="mvs-red"
              type="link"
              text={linkText ? linkText : "All Videos"}
              link={link ? link : "/media/videos"}
            />
          )
        ) : null}
      </div>
    </div>
  );
};

/* Export Statement */
export default VideoGrid;

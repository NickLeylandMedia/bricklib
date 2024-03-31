/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./MinimalFooter.module.scss";

/* Image Imports */

/* Component Imports */
import BadgeGrid from "@/components/grids/badgeGrid/BadgeGrid";
import WhiteText from "@/components/clickables/whiteText/WhiteText";

/* Module Imports */

/* Component Interfaces */
interface Badge {
  image: string;
  alt: string;
  text?: string;
  link: string;
}

interface Link {
  text: string;
  url: string;
}

interface Props {
  topBorderColor: string;
  links: Link[];
  badgeItems: Badge[];
  width?: "standard" | "wide";
  linkComponent?: React.ReactNode;
  badgeType: "picOnly" | "withText";
}

/* Component */
const MinimalFooter: React.FC<Props> = ({
  topBorderColor,
  links,
  badgeItems,
  width,
  linkComponent,
  badgeType,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const widthRef = {
    standard: "standardContainer",
    wide: "wideContainer",
  };

  let renderedLinks: any = <p>No links to display!</p>;

  /* End Render Variables */

  /* Render Logic */
  if (links && links.length > 0) {
    renderedLinks = links.map((link: any, index: number) => {
      return (
        <WhiteText
          fontClass="primary"
          key={index}
          text={link.text}
          url={link.url}
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
    <div
      className={`${styles.MinimalFooter} ${width ? widthRef[width] : ""}`}
      style={{ borderTop: `2px solid ${topBorderColor}` }}
    >
      <div className={styles.linkContainer}>{renderedLinks}</div>
      <div className={styles.badgeGridContainer}>
        <BadgeGrid
          badgeType={badgeType}
          textColor="light"
          maxColumns={3}
          header="Powered By:"
          items={badgeItems || []}
          rounded
        />
      </div>
    </div>
  );
};

/* Export Statement */
export default MinimalFooter;

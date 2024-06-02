/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PageHeader.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headerClass: "primary" | "secondary";
  textColor: "light" | "dark";
  text: string;
  width: "standard" | "nearFull";
  alignment: "center" | "left" | "right";
}

/* Component */
const PageHeader: React.FC<Props> = ({
  alignment,
  headerType,
  headerClass,
  textColor,
  text,
  width,
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
  switch (headerType) {
    case "h1":
      return (
        <h1
          className={`${headerClass} ${textColor} ${widthRef[width]} ${alignment}`}
        >
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${headerClass} ${textColor} ${widthRef[width]} ${alignment}`}
        >
          {text}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${headerClass} ${textColor} ${widthRef[width]} ${alignment}`}
        >
          {text}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${headerClass} ${textColor} ${widthRef[width]} ${alignment}`}
        >
          {text}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${headerClass} ${textColor} ${widthRef[width]} ${alignment}`}
        >
          {text}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${headerClass} ${textColor} ${widthRef[width]} ${alignment}`}
        >
          {text}
        </h6>
      );
  }
};

/* Export Statement */
export default PageHeader;

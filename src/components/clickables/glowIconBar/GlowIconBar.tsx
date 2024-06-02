/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./GlowIconBar.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  icons: any[];
  width?: "standard" | "nearFull";
}

/* Component */
const GlowIconBar: React.FC<Props> = ({ icons, width }) => {
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
      className={`${styles.GlowIconBar} ${
        width ? widthRef[width] : "standardContainer"
      }`}
    ></div>
  );
};

/* Export Statement */
export default GlowIconBar;

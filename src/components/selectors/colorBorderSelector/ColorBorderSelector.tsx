/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ColorBorderSelector.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  options: any[];
}

/* Component */
const ColorBorderSelector: React.FC<Props> = ({ options }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  let renderedOptions: any = null;
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <select name="" id="" className={`${styles.ColorBorderSelector}`}>
      {renderedOptions}
    </select>
  );
};

/* Export Statement */
export default ColorBorderSelector;

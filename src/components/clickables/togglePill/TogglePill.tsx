/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./TogglePill.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  text: string;
  action?: () => void;
  colorVar?: "blue" | "green" | "red" | "yellow";
  textColor?: "light" | "dark";
}

/* Component */
const TogglePill: React.FC<Props> = ({ action, colorVar, text, textColor }) => {
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
    <button
      onClick={() => {
        {
          action ? action() : null;
        }
      }}
      className={`${styles.SimplePill} ${textColor} ${colorVar}`}
    >
      {text ? text : "Button"}
    </button>
  );
};

/* Export Statement */
export default TogglePill;

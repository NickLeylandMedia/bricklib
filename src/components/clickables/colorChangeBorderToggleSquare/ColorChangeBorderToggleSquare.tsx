/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ColorChangeBorderToggleSquare.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  active: boolean;
  color?: string;
  style?: string;
  text: string;
  rounded?: boolean;
  activeAction?: () => void;
  inactiveAction?: () => void;
}

/* Component */
const ColorChangeBorderToggleSquare: React.FC<Props> = ({
  active,
  activeAction,
  color,
  inactiveAction,
  rounded,
  style,
  text,
}) => {
  /* State Variables */

  /* End State Variables */

  /* Render Variables */
  //Toggle state class for render
  const toggleClass = active ? styles.active : styles.inactive;

  const colorClass = color ? styles[color] : styles[`mvs-red`];

  const roundedClass = rounded ? styles.rounded : "";
  /* End Render Variables */

  /* Functions */

  /* End Functions */

  /* Effects */

  /* End Effects */

  /* Component Return Statement */
  return (
    <button
      className={`${styles.ColorChangeBorderToggleSquare} ${toggleClass} ${colorClass} ${roundedClass}`}
      onClick={active ? activeAction : inactiveAction}
    >
      {text ? text : "Button"}
    </button>
  );
};

/* Export Statement */
export default ColorChangeBorderToggleSquare;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./IconColorChangeBorderToggleSquare.module.scss";

/* Image Imports */
import { FaQuestion } from "react-icons/fa";

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  active: boolean;
  color?: string;
  style?: string;
  text: string;
  rounded?: boolean;
  icon?: string;
  activeAction?: () => void;
  inactiveAction?: () => void;
}

/* Component */
const IconColorChangeBorderToggleSquare: React.FC<Props> = ({
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

  const renderedIcon: any = <FaQuestion className={styles.icon} />;
  /* End Render Variables */

  /* Render Logic */

  /* End Render Logic */

  /* Functions */

  /* End Functions */

  /* Effects */

  /* End Effects */

  /* Component Return Statement */
  return (
    <button
      className={`${styles.IconColorChangeBorderToggleSquare} ${toggleClass} ${colorClass} ${roundedClass}`}
      onClick={active ? activeAction : inactiveAction}
    >
      <div className={styles.flexCol}>
        {renderedIcon}
        {text ? text : "Button"}
      </div>
    </button>
  );
};

/* Export Statement */
export default IconColorChangeBorderToggleSquare;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./IconTile.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  icon?: React.ReactNode;
  backgroundColor: string;
  rounded?: true;
  rectangular?: true;
  action?: () => void;
}

/* Component */
const IconTile: React.FC<Props> = ({
  action,
  icon,
  backgroundColor,
  rectangular,
  rounded,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const color = styles[backgroundColor];
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <button
      className={`${styles.IconTile} ${rounded} ${color} ${
        rounded ? styles.rounded : ""
      } ${rectangular ? styles.rectangular : ""}`}
      onClick={action}
    >
      {icon}
    </button>
  );
};

/* Export Statement */
export default IconTile;

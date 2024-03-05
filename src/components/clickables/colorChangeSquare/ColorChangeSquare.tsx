/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ColorChangeSquare.module.scss";

/* Image Imports */

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  type: "button" | "link";
  buttonColor: string;
  link?: string;
  text: string;
  action?: () => void;
}

/* Component */
const ColorChangeSquare: React.FC<Props> = ({
  action,
  buttonColor,
  link,
  text,
  type,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  //Variable For Text Color
  const colorVar = `${styles[buttonColor]}` || "redToBlue";
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  if (type === "link") {
    return (
      <Link
        href={link ? link : ""}
        className={`${styles.ColorChangeSquare} ${colorVar}`}
      >
        {text ? text : "Link"}
      </Link>
    );
  }

  if (type === "button") {
    return (
      <button
        onClick={() => {
          {
            action ? action() : null;
          }
        }}
        className={`${styles.ColorChangeSquare} ${colorVar}`}
      >
        {text ? text : "Button"}
      </button>
    );
  }
};

/* Export Statement */
export default ColorChangeSquare;

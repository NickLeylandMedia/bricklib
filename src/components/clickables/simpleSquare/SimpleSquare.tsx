/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./SimpleSquare.module.scss";

/* Image Imports */

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  type: "button" | "link";
  textColor: "light" | "dark";
  buttonColor: string;
  link?: string;
  text: string;
  action?: () => void;
}

/* Component */
const SimpleSquare: React.FC<Props> = ({
  action,
  buttonColor,
  link,
  textColor,
  text,
  type,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  //Variable For Text Color
  const colorVar = `${styles[buttonColor]}` || "red";
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
        className={`${styles.basicSquare} ${textColor} ${colorVar}`}
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
        className={`${styles.basicSquare} ${textColor} ${colorVar}`}
      >
        {text ? text : "Button"}
      </button>
    );
  }
};

/* Export Statement */
export default SimpleSquare;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./WhiteText.module.scss";

/* Image Imports */

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  text: string;
  url: string;
  fontClass: "primary" | "secondary" | "tertiary";
}

/* Component */
const WhiteText: React.FC<Props> = ({ fontClass, text, url }) => {
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
    <Link href={url} className={`${styles.WhiteText} light ${fontClass}`}>
      {text}
    </Link>
  );
};

/* Export Statement */
export default WhiteText;

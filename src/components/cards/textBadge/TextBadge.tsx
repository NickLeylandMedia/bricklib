/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./TextBadge.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  image: string;
  alt: string;
  text: string;
  link: string;
  rounded: boolean;
}

/* Component */
const TextBadge: React.FC<Props> = ({ image, alt, text, link, rounded }) => {
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
    <Link
      href={link ? link : ""}
      className={`${styles.TextBadge} raisedWhiteCardNoHover ${
        rounded ? styles.rounded : ""
      }`}
    >
      <Image
        src={image}
        alt={alt}
        height={720}
        width={1280}
        className={styles.image}
      />
      <h5 className="primary">{text ? text : "Text"}</h5>
    </Link>
  );
};

/* Export Statement */
export default TextBadge;

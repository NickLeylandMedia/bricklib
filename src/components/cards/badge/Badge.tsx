/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./Badge.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  link: string;
  image: string;
  alt: string;
  rounded: boolean;
}

/* Component */
const Badge: React.FC<Props> = ({ alt, image, link, rounded }) => {
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
      className={`${styles.Badge} raisedWhiteCardNoHover ${
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
    </Link>
  );
};

/* Export Statement */
export default Badge;

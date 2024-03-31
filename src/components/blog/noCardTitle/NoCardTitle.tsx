/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./NoCardTitle.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";

/* Module Imports */

/* Component Interfaces */
interface Props {
  title: string;
  subTitle: string;
  textColor: "light" | "dark";
  image: string;
  imgHeight: number;
  imgWidth: number;
  imageGlowColor: string;
  alt: string;
  datePublished: string;
}

/* Component */
const NoCardTitle: React.FC<Props> = ({
  title,
  subTitle,
  datePublished,
  image,
  alt,
  imgHeight,
  imgWidth,
  textColor,
  imageGlowColor,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const renderedDate = datePublished
    ? new Date(datePublished).toDateString()
    : "No Date Entered";
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.NoCardTitle} standardContainer`}>
      <h1 className={`primary ${textColor}`}>{title ? title : "Title"}</h1>
      <h3 className={`secondary ${textColor}`}>
        {subTitle ? subTitle : "This is a subtitle."}
      </h3>
      <p
        className={`${textColor} ${styles.titleDate}`}
      >{`Published On: ${renderedDate}`}</p>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.titleImage}
          src={image}
          alt={alt}
          height={imgHeight}
          width={imgWidth}
          layout="responsive"
          style={{
            boxShadow: `${imageGlowColor} 0px 0px 20px 2px`,
          }}
        />
      </div>
    </div>
  );
};

/* Export Statement */
export default NoCardTitle;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ImageWithText.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";

/* Module Imports */

/* Component Interfaces */
interface Props {
  caption: string;
  textColor: "light" | "dark";
  image: string;
  alt: string;
  text: string;
  header: string;
  imgOrient: "portrait" | "normal";
}

/* Component */
const ImageWithText: React.FC<Props> = ({
  caption,
  image,
  alt,
  text,
  header,
  imgOrient,
  textColor,
}) => {
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
    <div className={styles.ImageWithText}>
      <Image
        className={`${styles.image} ${
          imgOrient === "portrait" ? styles.portrait : ""
        }`}
        src={
          image
            ? image
            : "https://www.katebackdrop.com/cdn/shop/articles/photo_by_florian_berger_on_unsplash.jpg?v=1683336563"
        }
        alt={alt}
        height={720}
        width={1280}
      />
      <div className={styles.textBox}>
        <h5 className={`secondary ${textColor}`}>
          {caption ? caption : "Caption"}
        </h5>
        <h1 className={`primary ${textColor}`}>
          {header ? header : "Heading"}
        </h1>
        <p className={textColor}>
          {text
            ? text
            : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque fermentum dui faucibus in ornare quam. Sagittis eu
          volutpat odio facilisis. Quis vel eros donec ac. Suscipit tellus
          mauris a diam maecenas sed enim ut. Id aliquet risus feugiat in ante
          metus dictum at. Elementum integer enim neque volutpat ac tincidunt.
          Sed cras ornare arcu dui vivamus. Ut eu sem integer vitae justo eget.
          Aenean euismod elementum nisi quis eleifend quam adipiscing`}
        </p>
      </div>
    </div>
  );
};

/* Export Statement */
export default ImageWithText;

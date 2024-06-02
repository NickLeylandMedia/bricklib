/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ShortIntro.module.scss";

/* Image Imports */
import Image from "next/image";

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  alt: string;
  header: string;
  image: string;
  imgHeight: number;
  imgWidth: number;
  imageBorderColor: string;
  bioText: string;
  textColor: "light" | "dark";
  showHeader?: true;
}

/* Component */
const ShortIntro: React.FC<Props> = ({
  alt,
  header,
  image,
  imageBorderColor,
  bioText,
  imgHeight,
  imgWidth,
  textColor,
  showHeader,
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
    <div className={styles.ShortIntro}>
      {showHeader ? (
        <h3 className={`primary ${textColor} center`}>
          {header ? header : "Header"}
        </h3>
      ) : null}
      <Image
        src={
          image
            ? image
            : "https://st2.depositphotos.com/2559749/11304/v/450/depositphotos_113040644-stock-illustration-flat-icon-isolate-on-white.jpg"
        }
        alt={alt}
        height={imgHeight}
        width={imgWidth}
        style={{ border: `5px solid ${imageBorderColor}` }}
        className={styles.profileImage}
      />
      <p className={`${textColor} center ${styles.bio}`}>
        {bioText
          ? bioText
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
  );
};

/* Export Statement */
export default ShortIntro;

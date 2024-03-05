/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PictureCard.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  borderColor?: string;
  image: string;
  orientation: "horizontal" | "vertical";
  reverseHorizontal?: boolean;
  rounded?: boolean;
  summary: string;
  title: string;
}

/* Component */
const PictureCard: React.FC<Props> = ({
  borderColor,
  image,
  orientation,
  reverseHorizontal,
  rounded,
  summary,
  title,
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
  if (orientation === "horizontal") {
    return (
      <div
        className={`${styles.horizontalPictureCard} raisedWhiteCardNoPadding ${
          rounded ? styles.rounded : ""
        } ${reverseHorizontal ? styles.reverseHorizontal : ""} `}
      >
        <img
          src={
            image
              ? image
              : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
          alt=""
          className={`${styles.horizPicture} ${rounded ? styles.rounded : ""} ${
            reverseHorizontal ? styles.reverseHorizontal : ""
          }`}
        />
        <div
          className={`${styles.horizContentBox} ${
            rounded ? styles.rounded : ""
          }`}
        >
          <h3 className={`primary`}>{title ? title : "Article"}</h3>
          <p>
            {summary
              ? summary
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ante tortor, in efficitur ipsum malesuada id. Aliquam aliquet lacinia sollicitudin. Vestibulum urna risus, eleifend vitae laoreet"}
          </p>
        </div>
      </div>
    );
  }

  if (orientation === "vertical") {
    return (
      <div
        className={`${styles.verticalPictureCard} raisedWhiteCardNoPadding ${
          rounded ? styles.rounded : ""
        }`}
        style={{ borderBottom: `5px solid ${borderColor}` }}
      >
        <img
          src={
            image
              ? image
              : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
          alt=""
          className={`${styles.vertPicture} ${rounded ? styles.rounded : ""}`}
        />
        <div className={styles.vertContentBox}>
          <h3 className={`primary`}>{title ? title : "Article"}</h3>
          <p>
            {summary
              ? summary
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ante tortor, in efficitur ipsum malesuada id. Aliquam aliquet lacinia sollicitudin. Vestibulum urna risus, eleifend vitae laoreet"}
          </p>
        </div>
      </div>
    );
  }
};

/* Export Statement */
export default PictureCard;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./BasicPortraitCard.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  borderColor?: string;
  image: string;
  title: string;
  linkComponent: React.ReactNode;
  rounded: boolean;
  url?: string;
  action?: () => void;
}

/* Component */
const BasicPortraitCard: React.FC<Props> = ({
  borderColor,
  image,
  title,
  linkComponent,
  rounded,
  url,
  action,
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
    <div
      className={`${styles.BasicPortraitCard} raisedWhiteCardNoPadding ${
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
        className={`${styles.picture} ${rounded ? styles.rounded : ""}`}
      />
      <div className={styles.contentBox}>
        <h5 className={`primary`}>{title ? title : "Article"}</h5>
        {linkComponent}
      </div>
    </div>
  );
};

/* Export Statement */
export default BasicPortraitCard;

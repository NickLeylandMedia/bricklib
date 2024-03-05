/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./TitleCard.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  title: string;
  image: string;
  alt: string;
  date: string;
  rounded: boolean;
}

/* Component */
const TitleCard: React.FC<Props> = ({ alt, date, image, rounded, title }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let formattedDate = date ? new Date(date).toLocaleDateString() : "No Date";
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.TitleCard} raisedWhiteCardNoPadding ${
        rounded ? styles.rounded : ""
      }`}
    >
      <div
        className={`${styles.imageSection} ${rounded ? styles.rounded : ""}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.infoSection}>
        <div className={styles.titleContainer}>
          <h1 className="primary">{title}</h1>
        </div>
        <h4 className="secondary">Posted On: {formattedDate}</h4>
        <div className={styles.tagsCats}>
          <div className={styles.catContainer}>
            <h4 className="primary">Categories</h4>
          </div>
          <div className={styles.tagContainer}>
            <h4 className="primary">Tags</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default TitleCard;

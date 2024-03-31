/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PagedCards.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  textColor: "light" | "dark";
  headerClass: "primary" | "secondary";
  cards: any[];
}

/* Component */
const PagedCards: React.FC<Props> = ({
  textColor,
  headerClass,
  header,
  cards,
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
    <div className={styles.PagedCards}>
      <h2 className={`${textColor} ${headerClass}`}>
        {header ? header : "Header"}
      </h2>
      <div className={styles.cardContainer}></div>
    </div>
  );
};

/* Export Statement */
export default PagedCards;

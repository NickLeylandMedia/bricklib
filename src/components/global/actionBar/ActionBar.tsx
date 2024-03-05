/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ActionBar.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  items: any[];
}

/* Component */
const ActionBar: React.FC<Props> = ({ items }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedItems: any = <p>No items to display!</p>;

  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedItems = items.map((item, index) => {
      return item;
    });
  }
  /* End Render Logic */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.ActionBar} standardContainer raisedWhiteCardNoHover`}
    >
      <div className={`${styles.actionContainer} maxThreeColumns`}>
        {renderedItems}
      </div>
    </div>
  );
};

/* Export Statement */
export default ActionBar;

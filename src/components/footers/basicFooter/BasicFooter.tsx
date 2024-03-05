/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./BasicFooter.module.scss";

/* Image Imports */

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  topBorderColor: string;
}

/* Component */
const BasicFooter: React.FC<Props> = ({ topBorderColor }) => {
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
      className={styles.BasicFooter}
      style={{ borderTop: `2px solid ${topBorderColor}` }}
    >
      <div className={styles.linkBox}></div>
      <div className={styles.badgeBox}>
        <h5 className="primary">Powered By:</h5>
        <div className={styles.badgeContainer}></div>
      </div>
    </div>
  );
};

/* Export Statement */
export default BasicFooter;

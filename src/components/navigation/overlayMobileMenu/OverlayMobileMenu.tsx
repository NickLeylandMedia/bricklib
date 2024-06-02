/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./OverlayMobileMenu.module.scss";

/* Image Imports */

/* Component Imports */
import MobileMenu from "../mobileMenu/MobileMenu";
import SolidIcon from "@/components/clickables/solidIcon/SolidIcon";

/* Module Imports */

/* Component Interfaces */
interface Props {
  closer: (bool: boolean) => void;
}

/* Component */
const OverlayMobileMenu: React.FC<Props> = ({ closer }) => {
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
    <div className={styles.OverlayMobileMenu}>
      <div className={styles.overlay}></div>
      <SolidIcon
        icon="close"
        size="40px"
        glowColor="red"
        iconColor="light"
        action={() => closer(false)}
      />
      <MobileMenu />
    </div>
  );
};

/* Export Statement */
export default OverlayMobileMenu;

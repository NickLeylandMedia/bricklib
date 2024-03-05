/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./DarkNav.module.scss";

/* Image Imports */
import { LuMenuSquare } from "react-icons/lu";
import { TiHome } from "react-icons/ti";

/* Component Imports */
import WhiteText from "../../clickables/whiteText/WhiteText";

/* Module Imports */

/* Component Interfaces */
interface Link {
  text: string;
  url: string;
  fontClass: "primary" | "secondary" | "tertiary";
  icon: string;
}

interface Props {
  links: Link[];
}

/* Component */
const DarkNav: React.FC<Props> = ({ links }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let mobileLinks: any = null;
  let fullSizeLinks: any = null;
  /* End Render Variables */

  /* Render Logic */
  if (links && links.length > 0) {
    fullSizeLinks = links.map((link, index) => {
      return (
        <WhiteText
          key={index}
          text={link.text}
          url={link.url}
          fontClass="primary"
        />
      );
    });
  }
  /* End Render Logic */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={styles.DarkNav}>
      <div className={styles.mobileNav}>
        <TiHome className={styles.mobileIcon} />
        <LuMenuSquare className={styles.mobileIcon} />
      </div>
      <div className={styles.fullSizeNav}>
        <div className={styles.logoContainer}></div>
        <div className={styles.linkContainer}>{fullSizeLinks}</div>
      </div>
    </div>
  );
};

/* Export Statement */
export default DarkNav;

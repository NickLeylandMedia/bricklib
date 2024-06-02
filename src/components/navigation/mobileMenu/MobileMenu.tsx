/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./MobileMenu.module.scss";

/* Image Imports */

/* Component Imports */
import WhiteText from "@/components/clickables/whiteText/WhiteText";

/* Module Imports */

/* Component Interfaces */

interface Props {}

/* Component */
const MobileMenu: React.FC<Props> = () => {
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
    <div className={styles.MobileMenu}>
      <WhiteText text="Home" url="/" fontClass="primary" />
      <WhiteText text="About" url="/about" fontClass="primary" />
      <WhiteText text="Services" url="/about" fontClass="primary" />
      <WhiteText text="Media" url="/media" fontClass="primary" />
      <WhiteText
        text="Shop"
        url="https://shop.nick-leyland.com"
        fontClass="primary"
      />
      <WhiteText text="Blog" url="/blog" fontClass="primary" />
      {/* <WhiteText text="Gear" url="/gear" fontClass="primary" /> */}
      <WhiteText text="Contact" url="/contact" fontClass="primary" />
      <WhiteText text="Links" url="/links" fontClass="primary" />
    </div>
  );
};

/* Export Statement */
export default MobileMenu;

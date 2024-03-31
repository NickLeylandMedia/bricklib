"use client";

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./HeroWithNav.module.scss";

/* Image Imports */
import { FaCaretDown } from "react-icons/fa";

/* Component Imports */
import WhiteText from "../../clickables/whiteText/WhiteText";

/* Module Imports */

/* Component Interfaces */
interface LinkProps {
  text: string;
  url: string;
}

interface Props {
  header?: string;
  subHeader?: string;
  smallImage: string;
  largeImage: string;
  links: LinkProps[];
}

/* Component */
const HeroWithNav: React.FC<Props> = ({
  header,
  largeImage,
  links,
  smallImage,
  subHeader,
}) => {
  /* State Variables */

  /* End State Variables */

  /* Render Variables */
  let renderedLinks: any = null;
  /* End Render Variables */

  /* Render Logic */
  if (links && links.length > 0) {
    renderedLinks = links.map((link: any, index: number) => {
      return (
        <WhiteText
          fontClass="primary"
          key={index}
          text={link.text}
          url={link.url}
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
    <React.Fragment>
      <div
        className={styles.smallImageBg}
        style={{ backgroundImage: `url(${smallImage})` }}
      ></div>
      <div
        className={styles.largeImageBg}
        style={{ backgroundImage: `url(${largeImage})` }}
      ></div>
      <div className={styles.HeroWithNav}>
        <div className={styles.backgroundOverlay}>
          <div className={styles.sideBar}>
            <div className={styles.sideBarBackground}></div>
            <div className={styles.sideBarOverlay}></div>
            {renderedLinks}
          </div>
          <div className={styles.headerBox}>
            <h1 className="primary light">{header}</h1>
            <h2 className="primary light">{subHeader}</h2>
          </div>
          <div className={styles.downArrowBox}>
            <FaCaretDown className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

/* Export Statement */
export default HeroWithNav;

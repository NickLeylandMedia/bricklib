/* Library Imports */
//React
import React, { useState } from "react";

/* Stylesheet Imports */
import styles from "./MinimalLogoNav.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import SolidIcon from "@/components/clickables/solidIcon/SolidIcon";
import WhiteText from "@/components/clickables/whiteText/WhiteText";

/* Module Imports */

/* Component Interfaces */
interface Link {
  text: string;
  url: string;
}

interface Props {
  logo: string;
  logoAlt: string;
  links: Link[];
  logoHeight: number;
  logoWidth: number;
  menuOpener: (bool: boolean) => void;
}

/* Component */
const MinimalLogoNav: React.FC<Props> = ({
  logo,
  logoAlt,
  links,
  logoHeight,
  logoWidth,
  menuOpener,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedLinks: any = null;
  /* End Render Variables */

  /* Render Logic */
  if (links && links.length > 0) {
    renderedLinks = links.map((link, index) => (
      <WhiteText
        fontClass="primary"
        key={index}
        text={link.text}
        url={link.url}
      />
    ));
  }
  /* End Render Logic */

  /* Functions */

  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.MinimalLogoNav} flexRowJustifyBetween wideContainer`}
    >
      <div className={styles.mobileNav}>
        <SolidIcon
          icon="home"
          size="40px"
          glowColor="red"
          iconColor="light"
          link="/"
        />
        <SolidIcon
          icon="menu"
          size="40px"
          glowColor="red"
          iconColor="light"
          action={() => menuOpener(true)}
        />
      </div>
      <Image
        className={styles.logo}
        src={logo}
        alt={logoAlt}
        height={logoHeight}
        width={logoWidth}
      />
      <div className={styles.linkContainer}>{renderedLinks}</div>
    </div>
  );
};

/* Export Statement */
export default MinimalLogoNav;

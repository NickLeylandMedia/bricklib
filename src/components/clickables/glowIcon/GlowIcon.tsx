/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./GlowIcon.module.scss";

/* Image Imports */
import { IoCamera } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { LuMenuSquare } from "react-icons/lu";

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  icon?: string;
  glowColor: string;
  iconColor: "light" | "dark";
  size: string;
  height?: number;
  width?: number;
}

/* Component */
const GlowIcon: React.FC<Props> = ({
  icon,
  size,
  iconColor,
  glowColor,
  height,
  width,
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
  switch (icon) {
    case "home":
      return (
        <TiHome
          className={`${styles.GlowIcon} ${styles[glowColor]} ${iconColor}`}
          style={{
            height: height ? height : size,
            width: width ? width : size,
          }}
        />
      );
    case "menu":
      return (
        <LuMenuSquare
          className={`${styles.GlowIcon} ${styles[glowColor]} ${iconColor}`}
          style={{
            height: height ? height : size,
            width: width ? width : size,
          }}
        />
      );
    case "camera":
      return (
        <IoCamera
          className={`${styles.GlowIcon} ${styles[glowColor]} ${iconColor}`}
          style={{
            height: height ? height : size,
            width: width ? width : size,
          }}
        />
      );
    default:
      return (
        <FaQuestion
          className={`${styles.GlowIcon} ${styles[glowColor]} ${iconColor}`}
          style={{
            height: height ? height : size,
            width: width ? width : size,
          }}
        />
      );
  }
};

/* Export Statement */
export default GlowIcon;

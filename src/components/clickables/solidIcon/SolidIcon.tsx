/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./SolidIcon.module.scss";

/* Image Imports */
import { IoCamera } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { LuMenuSquare } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  icon?: string;
  glowColor: string;
  iconColor: "light" | "dark";
  size: string;
  height?: number;
  width?: number;
  action?: any;
  link?: string;
}

/* Component */
const SolidIcon: React.FC<Props> = ({
  icon,
  size,
  iconColor,
  glowColor,
  height,
  width,
  action,
  link,
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
    case "close":
      if (link) {
        return (
          <Link href={link}>
            <IoCloseSharp
              className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
              onClick={action ? action : null}
              style={{
                height: height ? height : size,
                width: width ? width : size,
              }}
            />
          </Link>
        );
      } else {
        return (
          <IoCloseSharp
            className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
            onClick={action ? action : null}
            style={{
              height: height ? height : size,
              width: width ? width : size,
            }}
          />
        );
      }
    case "home":
      if (link) {
        return (
          <Link href={link}>
            <TiHome
              className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
              onClick={action ? action : null}
              style={{
                height: height ? height : size,
                width: width ? width : size,
              }}
            />
          </Link>
        );
      } else {
        return (
          <TiHome
            className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
            onClick={action ? action : null}
            style={{
              height: height ? height : size,
              width: width ? width : size,
            }}
          />
        );
      }

    case "menu":
      if (link) {
        return (
          <Link href={link}>
            <LuMenuSquare
              className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
              onClick={action ? action : null}
              style={{
                height: height ? height : size,
                width: width ? width : size,
              }}
            />
          </Link>
        );
      } else {
        return (
          <LuMenuSquare
            className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
            onClick={action ? action : null}
            style={{
              height: height ? height : size,
              width: width ? width : size,
            }}
          />
        );
      }
    case "camera":
      if (link) {
        return (
          <Link href={link}>
            <IoCamera
              className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
              onClick={action ? action : null}
              style={{
                height: height ? height : size,
                width: width ? width : size,
              }}
            />
          </Link>
        );
      } else {
        return (
          <IoCamera
            className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
            onClick={action ? action : null}
            style={{
              height: height ? height : size,
              width: width ? width : size,
            }}
          />
        );
      }
    default:
      if (link) {
        return (
          <Link href={link}>
            <FaQuestion
              className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
              onClick={action ? action : null}
              style={{
                height: height ? height : size,
                width: width ? width : size,
              }}
            />
          </Link>
        );
      } else {
        return (
          <FaQuestion
            className={`${styles.SolidIcon} ${styles[glowColor]} ${iconColor}`}
            onClick={action ? action : null}
            style={{
              height: height ? height : size,
              width: width ? width : size,
            }}
          />
        );
      }
  }
};

/* Export Statement */
export default SolidIcon;

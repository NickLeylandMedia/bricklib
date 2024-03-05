/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./Arrow.module.scss";

/* Image Imports */
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

/* Component Imports */
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  color: string;
  direction: "up" | "down" | "left" | "right";
  type: "link" | "button";
  link?: string;
  action?: () => void;
}

/* Component */
const Arrow: React.FC<Props> = ({ action, color, direction, link, type }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  if (direction === "up") {
    if (type === "link") {
      return (
        <Link href={link ? link : ""}>
          <FaArrowUp className={`${styles.Arrow} ${styles[color]}`} />;
        </Link>
      );
    } else {
      return (
        <FaArrowUp
          className={`${styles.Arrow} ${styles[color]}`}
          onClick={action ? () => action() : () => {}}
        />
      );
    }
  }

  if (direction === "down") {
    if (type === "link") {
      return (
        <Link href={link ? link : ""}>
          <FaArrowDown className={`${styles.Arrow} ${styles[color]}`} />
        </Link>
      );
    } else {
      return (
        <FaArrowDown
          className={`${styles.Arrow} ${styles[color]}`}
          onClick={action ? () => action() : () => {}}
        />
      );
    }
  }

  if (direction === "left") {
    if (type === "link") {
      return (
        <Link href={link ? link : ""}>
          <FaArrowLeft className={`${styles.Arrow} ${styles[color]}`} />
        </Link>
      );
    } else {
      return (
        <FaArrowLeft
          className={`${styles.Arrow} ${styles[color]}`}
          onClick={action ? () => action() : () => {}}
        />
      );
    }
  }

  if (direction === "right") {
    if (type === "link") {
      return (
        <Link href={link ? link : ""}>
          <FaArrowRight className={`${styles.Arrow} ${styles[color]}`} />
        </Link>
      );
    } else {
      return (
        <FaArrowRight
          className={`${styles.Arrow} ${styles[color]}`}
          onClick={action ? () => action() : () => {}}
        />
      );
    }
  }
};

/* Export Statement */
export default Arrow;

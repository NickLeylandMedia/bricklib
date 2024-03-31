/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import styles from "./TextRenderer.module.scss";

/* Image Imports */
import { FaList } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

/* Component Imports */
import Link from "next/link";

/* Module Imports */
import { motion } from "framer-motion";

/* Component Interfaces */
interface Props {
  body: any[];
  TOCSetter?: (toc: any) => void;
  textColor: "light" | "dark";
  headerClass?: "primary" | "secondary";
  glowColor?: string;
}

/* Component */
const TextRenderer: React.FC<Props> = ({
  body,
  headerClass,
  textColor,
  glowColor,
}) => {
  /* State Variables */
  const [TOC, setTOC] = useState<string[]>([]);
  const [showTOC, setShowTOC] = useState<boolean>(false);
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Render Logic */
  /* End Render Logic */

  /* Functions */
  /* End Functions */

  /* Effects */
  useEffect(() => {
    const newArr = body
      .filter((block) => {
        const string = String(block.style);
        if (string.charAt(0) === "h") {
          return true;
        }
      })
      .map((block) => block.children[0].text);
    setTOC(newArr);
  }, [body]);

  useEffect(() => {
    console.log({ toc: TOC });
  }, [TOC]);

  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.TextRenderer} ${textColor ? textColor : "light"}`}
    >
      {showTOC ? (
        <motion.div
          className={styles.tocBox}
          style={{
            boxShadow: `${glowColor ? glowColor : "red"} 0px 0px 20px 2px`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <IoMdClose
            className={`${styles.tocIcon} ${styles.closeIcon}`}
            onClick={() => setShowTOC(false)}
          />
          <h4 className="primary dark center">Table of Contents</h4>
          <ul className={`left ${styles.tocLink}`}>
            {TOC.map((item, index) => (
              <li key={index}>
                <Link href={`#${item}`} key={index}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ) : null}
      {showTOC ? null : (
        <div className={styles.tocBadge} onClick={() => setShowTOC(true)}>
          <FaList className={styles.tocIcon} />
        </div>
      )}
      {body.map((block, index) => {
        if (block.style === "h1") {
          return (
            <h1
              id={block.children[0].text}
              className={`${headerClass ? headerClass : "primary"}`}
              key={index}
            >
              {block.children[0].text}
            </h1>
          );
        }
        if (block.style === "h2") {
          return (
            <h2
              id={block.children[0].text}
              className={`${headerClass ? headerClass : "primary"}`}
              key={index}
            >
              {block.children[0].text}
            </h2>
          );
        }
        if (block.style === "h3") {
          return (
            <h3
              id={block.children[0].text}
              className={`${headerClass ? headerClass : "primary"}`}
              key={index}
            >
              {block.children[0].text}
            </h3>
          );
        }
        if (block.style === "h4") {
          return (
            <h4
              id={block.children[0].text}
              className={`${headerClass ? headerClass : "primary"}`}
              key={index}
            >
              {block.children[0].text}
            </h4>
          );
        }
        if (block.style === "h5") {
          return (
            <h5
              id={block.children[0].text}
              className={`${headerClass ? headerClass : "primary"}`}
              key={index}
            >
              {block.children[0].text}
            </h5>
          );
        }
        if (block.style === "h6") {
          return (
            <h6
              id={block.children[0].text}
              className={`${headerClass ? headerClass : "primary"}`}
              key={index}
            >
              {block.children[0].text}
            </h6>
          );
        }
        //paragraph
        if (block.style === "normal") {
          return <p key={index}>{block.children[0].text}</p>;
        }
      })}
    </div>
  );
};

/* Export Statement */
export default TextRenderer;

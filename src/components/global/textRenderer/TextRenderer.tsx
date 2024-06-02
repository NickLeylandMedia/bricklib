/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import styles from "./TextRenderer.module.scss";

/* Image Imports */
import { FaList } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */
import { motion } from "framer-motion";
import { urlFor } from "@/modules/sanity";

/* Component Interfaces */
interface Props {
  body: any[];
  TOCSetter?: (toc: any) => void;
  textColor: "light" | "dark";
  headerClass?: "primary" | "secondary";
  glowColor?: string;
  TOCenabled: boolean;
}

/* Component */
const TextRenderer: React.FC<Props> = ({
  body,
  headerClass,
  textColor,
  glowColor,
  TOCenabled,
}) => {
  /* State Variables */
  const [TOC, setTOC] = useState<string[]>([]);
  const [showTOC, setShowTOC] = useState<boolean>(false);
  /* End State Variables */

  /* Render Variables */
  let renderedTOC: any = null;

  let renderedBadge: any = null;
  /* End Render Variables */

  /* Render Logic */
  if (TOCenabled && !showTOC) {
    renderedBadge = (
      <div
        key={Math.random()}
        className={styles.tocBadge}
        onClick={() => setShowTOC(true)}
      >
        <FaList className={styles.tocIcon} />
      </div>
    );
  }

  if (TOCenabled && showTOC && TOC.length > 0) {
    renderedTOC = (
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
    );
  }

  /* End Render Logic */

  /* Functions */
  /* End Functions */

  /* Effects */
  useEffect(() => {
    if (!body) return;
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

  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.TextRenderer} ${textColor ? textColor : "light"}`}
    >
      {TOCenabled && TOC.length > 0 ? (
        <div className={styles.mobileToc}>
          <h4 className="dark primary center">Table Of Contents</h4>
          <ul className={`left ${styles.tocLink}`}>
            {TOC.map((item, index) => (
              <li key={index}>
                <Link href={`#${item}`} key={index}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {renderedTOC}
      {renderedBadge}
      {body && body.length
        ? body.map((block, index) => {
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
            //image
            if (block._type === "image") {
              return (
                <Image
                  key={Math.random()}
                  src={urlFor(block.asset).url()}
                  width={1280}
                  height={720}
                  alt={block._key}
                  className={styles.postImage}
                />
              );
            }
            //Image With Text
            if (block._type === "imageWithText") {
              if (block.orientation === "landscape") {
                return (
                  <div key={Math.random()} className={styles.imageWithText}>
                    <Image
                      src={urlFor(block.image).url()}
                      width={1280}
                      height={720}
                      alt={block.alt}
                      className={`${styles.image} ${styles.landscape}`}
                    />
                    <p className={`${styles.text} ${block.textColor}`}>
                      {block.text}
                    </p>
                  </div>
                );
              }
              if (block.orientation === "portrait") {
                return (
                  <div key={Math.random()} className={styles.imageWithText}>
                    <Image
                      src={urlFor(block.image).url()}
                      width={1280}
                      height={720}
                      alt={block.alt}
                      className={`${styles.image} ${styles.portrait}`}
                    />
                    <p className={`${styles.text} ${block.textColor}`}>
                      {block.text}
                    </p>
                  </div>
                );
              }
            }

            //Specification Text
            if (block._type === "specificationText") {
              return (
                <div
                  key={Math.random()}
                  className={`${styles.specificationText}`}
                >
                  <h3 className={`${block.color} ${block.headerClass}`}>
                    {block.specification}:
                  </h3>
                  <p className={`${styles.text}`} key={index}>
                    {block.text}
                  </p>
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

/* Export Statement */
export default TextRenderer;

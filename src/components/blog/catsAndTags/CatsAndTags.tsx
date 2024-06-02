/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./CatsAndTags.module.scss";

/* Image Imports */

/* Component Imports */
import SimplePill from "@/components/clickables/simplePill/SimplePill";

/* Module Imports */

/* Component Interfaces */
interface Props {
  cats: any[];
  tags: any[];
  textColor: "light" | "dark";
  headerClass: "primary" | "secondary";
  width?: "standard" | "nearFull";
}

/* Component */
const CatsAndTags: React.FC<Props> = ({
  cats,
  headerClass,
  tags,
  textColor,
  width,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedCats: any = (
    <p className={`${textColor}`}>No categories to display!</p>
  );
  let renderedTags: any = <p className={`${textColor}`}>No tags to display!</p>;

  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };

  /* End Render Variables */

  /* Render Logic */
  if (cats && cats.length > 0) {
    renderedCats = cats.map((cat) => (
      <SimplePill
        key={Math.random()}
        type="link"
        textColor={"light"}
        buttonColor="mvs-blue"
        link={`/blog/categories/${cat.name}`}
        text={cat.name}
      />
    ));
  }

  if (tags && tags.length > 0) {
    renderedTags = tags.map((tag) => (
      <SimplePill
        key={Math.random()}
        type="link"
        textColor={"light"}
        buttonColor="mvs-red"
        link={`/blog/tags/${tag.name}`}
        text={tag.name}
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
      className={`${styles.CatsAndTags} ${
        width ? widthRef[width] : "standardContainer"
      }`}
    >
      <div className={styles.pillContainer}>
        <h3 className={`${textColor} ${headerClass}`}>Categories</h3>
        <div className={styles.catTagFlex}>{renderedCats}</div>
      </div>
      <div className={styles.pillContainer}>
        <h3 className={`${textColor} ${headerClass}`}>Tags</h3>
        <div className={styles.catTagFlex}>{renderedTags}</div>
      </div>
    </div>
  );
};

/* Export Statement */
export default CatsAndTags;

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
  let renderedCats: any = <p>No categories to display!</p>;
  let renderedTags: any = <p>No tags to display!</p>;

  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };

  /* End Render Variables */

  /* Render Logic */
  if (cats.length > 0) {
    renderedCats = cats.map((cat) => (
      <SimplePill
        type="link"
        textColor={"light"}
        buttonColor="mvs-blue"
        link={`/blog/category/${cat.slug.current}`}
        text={cat.title}
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
      <div className={styles.catContainer}>
        <h3 className={`${textColor} ${headerClass}`}>Categories</h3>
        <div className={styles.catTagFlex}>{renderedCats}</div>
      </div>
      <div className={styles.tagContainer}>
        <h3 className={`${textColor} ${headerClass}`}>Tags</h3>
        <div className={styles.catTagFlex}></div>
      </div>
    </div>
  );
};

/* Export Statement */
export default CatsAndTags;

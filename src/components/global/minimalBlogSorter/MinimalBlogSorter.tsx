/* Library Imports */
//React
import React, { useEffect, useState, useRef } from "react";

/* Stylesheet Imports */
import styles from "./MinimalBlogSorter.module.scss";

/* Image Imports */
import { IoMdClose } from "react-icons/io";

/* Component Imports */
import ColorChangeBorderSquare from "@/components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import SimplePill from "@/components/clickables/simplePill/SimplePill";

/* Module Imports */

/* Component Interfaces */
interface CatTagItem {
  name: string;
  active: boolean;
}

interface Props {
  headerClass: "primary" | "secondary";
  textColor: "light" | "dark";
  categoryItems: string[];
  tagItems: string[];
  catCallback?: (obj: any) => void;
  tagCallback?: (obj: any) => void;
}

/* Component */
const MinimalBlogSorter: React.FC<Props> = ({
  categoryItems,
  tagItems,
  headerClass,
  textColor,
  catCallback,
  tagCallback,
}) => {
  /* State Variables */
  const [categories, setCategories] = useState<CatTagItem[]>();
  const [tags, setTags] = useState<CatTagItem[]>();
  const [showMobileSorter, setShowMobileSorter] = useState(false);
  const isFirst = useRef(true);
  /* End State Variables */

  /* Render Variables */
  let renderedCategories: any = (
    <p className="light">No categories to display!</p>
  );
  let renderedTags: any = <p className="light">No tags to display!</p>;
  /* End Render Variables */

  /* Render Logic */
  if (categories && categories.length > 0) {
    renderedCategories = categories.map((item, index) => {
      if (item.active) {
        return (
          <SimplePill
            key={index}
            text={item.name}
            type="button"
            textColor="light"
            buttonColor="mvs-blue"
            action={() => toggleSorterItem(item.name)}
          />
        );
      }

      if (!item.active) {
        return (
          <SimplePill
            key={index}
            text={item.name}
            type="button"
            textColor="light"
            buttonColor="veryDarkBlue"
            action={() => toggleSorterItem(item.name)}
          />
        );
      }
    });
  }

  if (tags && tags.length > 0) {
    renderedTags = tags.map((item, index) => {
      if (item.active) {
        return (
          <SimplePill
            key={index}
            text={item.name}
            type="button"
            textColor="light"
            buttonColor="mvs-red"
            action={() => toggleSorterItem(item.name)}
          />
        );
      }

      if (!item.active) {
        return (
          <SimplePill
            key={index}
            text={item.name}
            type="button"
            textColor="light"
            buttonColor="veryDarkRed"
            action={() => toggleSorterItem(item.name)}
          />
        );
      }
    });
  }

  /* End Render Logic */

  /* Functions */
  function toggleSorterItem(name: string) {
    if (categories && categories.length > 0) {
      const catProx = categories.map((item) => {
        if (item.name === name) {
          return { name: item.name, active: !item.active };
        }
        return item;
      });
      setCategories(catProx);
      if (catCallback) {
        catCallback(catProx);
      }
    }
    if (tags && tags.length > 0) {
      const tagProx = tags.map((item) => {
        if (item.name === name) {
          return { name: item.name, active: !item.active };
        }
        return item;
      });
      setTags(tagProx);
      if (tagCallback) {
        tagCallback(tagProx);
      }
    }
  }
  /* End Functions */

  /* Effects */
  useEffect(() => {
    if (isFirst.current) {
      const catProx = categoryItems.map((item) => {
        return { name: item, active: false };
      });
      const tagProx = tagItems.map((item) => {
        return { name: item, active: false };
      });
      setCategories(catProx);
      setTags(tagProx);
    }
    isFirst.current = false;
  }, [categoryItems, tagItems]);

  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={styles.MinimalBlogSorter}>
      <div className={styles.buttonContainer}>
        <ColorChangeBorderSquare
          type="button"
          buttonColor="mvs-red"
          action={() => setShowMobileSorter(true)}
          text="Filter"
        />
      </div>
      <div className={styles.fullSizeSorter}>
        <h3 className={`${headerClass} ${textColor}`}>Categories:</h3>
        <div className={styles.itemBox}>{renderedCategories}</div>
        <h3 className={`${headerClass} ${textColor}`}>Tags:</h3>
        <div className={styles.itemBox}>{renderedTags}</div>
      </div>
      {showMobileSorter ? (
        <>
          <div className={styles.mobileSorterBackdrop}></div>
          <div className={`${styles.mobileSorter} raisedWhiteCardNoHover`}>
            <IoMdClose
              className={styles.closeIcon}
              onClick={() => setShowMobileSorter(false)}
            />
            <h3 className={`${headerClass} dark`}>Categories:</h3>
            <div className={styles.itemBox}>{renderedCategories}</div>
            <h3 className={`${headerClass} dark`}>Tags:</h3>
            <div className={styles.itemBox}>{renderedTags}</div>
          </div>
        </>
      ) : null}
    </div>
  );
};

/* Export Statement */
export default MinimalBlogSorter;

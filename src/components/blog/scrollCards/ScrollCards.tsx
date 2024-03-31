/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ScrollCards.module.scss";

/* Image Imports */

/* Component Imports */
import BasicPortraitCard from "../../../components/cards/basicPortraitCard/BasicPortraitCard";
/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  textColor: "light" | "dark";
  headerClass: "primary" | "secondary";
  items: any[];
}

/* Component */
const ScrollCards: React.FC<Props> = ({
  header,
  headerClass,
  textColor,
  items,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedCards: any = <p>No cards to display.</p>;
  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedCards = items.map((item, index) => {
      return (
        <BasicPortraitCard
          key={index}
          borderColor="red"
          image={item.image}
          title="Performers"
          linkComponent={null}
          rounded={false}
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
    <div className={styles.ScrollCards}>
      <h2 className={`${textColor} ${headerClass}`}>
        {header ? header : "Header"}
      </h2>
      <div className={styles.scrollContainer}>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
        <div className="raisedWhiteCardNoHover"></div>
      </div>
    </div>
  );
};

/* Export Statement */
export default ScrollCards;

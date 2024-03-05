/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./NoCardArticleList.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "../../../components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import NoCardArticle from "../noCardArticle/NoCardArticle";

/* Module Imports */

/* Component Interfaces */
interface Props {
  textColor: "light" | "dark";
  header: string;
  items: any[];
  linkComponent?: React.ReactNode;
  showLink: boolean;
}

/* Component */
const NoCardArticleList: React.FC<Props> = ({
  header,
  items,
  textColor,
  showLink,
  linkComponent,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedArticles: any = (
    <p className={`${textColor}`}>No items to display!</p>
  );
  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedArticles = items.map((item, index) => {
      return (
        <NoCardArticle
          textColor={textColor}
          key={index}
          img={item.img}
          alt={item.alt}
          title={item.title}
          summary={item.summary}
          imgHeight={600}
          imgWidth={600}
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
    <div className={styles.NoCardArticleList}>
      <h2 className={`primary ${textColor}`}>{header ? header : "Header"}</h2>
      <div className={`${styles.articleContainer} maxThreeColumns`}>
        {renderedArticles}
      </div>
      <div className={styles.linkContainer}>
        {showLink ? (
          linkComponent ? (
            linkComponent
          ) : (
            <ColorChangeBorderSquare
              buttonColor="mvs-red"
              type="link"
              text="Read All"
            />
          )
        ) : null}
      </div>
    </div>
  );
};

/* Export Statement */
export default NoCardArticleList;

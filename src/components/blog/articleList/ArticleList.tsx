/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ArticleList.module.scss";

/* Image Imports */

/* Component Imports */
import PictureCard from "../../cards/pictureCard/PictureCard";

/* Module Imports */

/* Component Interfaces */
interface Props {
  alternateHorizontal?: boolean;
  articles: any[];
  header: string;
  orientation: "horizontal" | "vertical";
  rounded?: boolean;
  reverseHorizontal?: boolean;
}

/* Component */
const ArticleList: React.FC<Props> = ({
  alternateHorizontal,
  articles,
  header,
  orientation,
  reverseHorizontal,
  rounded,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedArticles: any = (
    <p className={styles.articlePlaceholder}>No articles to display!</p>
  );
  /* End Render Variables */

  /* Render Logic */
  if (articles && articles.length > 0) {
    renderedArticles = articles.map((article, index) => {
      if (orientation === "horizontal" && alternateHorizontal) {
        if (index % 2 === 0) {
          return (
            <PictureCard
              key={index}
              borderColor={"blue"}
              image={article.image}
              title={article.title}
              orientation={orientation}
              reverseHorizontal={true}
              summary={article.summary}
              rounded={rounded}
            />
          );
        }
      }
      return (
        <PictureCard
          key={index}
          borderColor={"blue"}
          image={article.image}
          title={article.title}
          orientation={orientation}
          reverseHorizontal={reverseHorizontal}
          summary={article.summary}
          rounded={rounded}
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
    <div className={`${styles.ArticleList}`}>
      <h2 className="primary">{header ? header : "Header"}</h2>
      <div
        className={`${
          orientation === "vertical" ? "maxThreeColumns" : "maxTwoColumns"
        }`}
      >
        {renderedArticles}
      </div>
    </div>
  );
};

/* Export Statement */
export default ArticleList;

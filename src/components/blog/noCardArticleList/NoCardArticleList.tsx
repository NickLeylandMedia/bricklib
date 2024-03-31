/* Library Imports */
//React
import React, { useState } from "react";

/* Stylesheet Imports */
import styles from "./NoCardArticleList.module.scss";

/* Image Imports */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* Component Imports */
import ColorChangeBorderSquare from "../../../components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import IconTile from "../../../components/clickables/iconTile/IconTile";
import NoCardArticle from "../noCardArticle/NoCardArticle";

/* Module Imports */

/* Component Interfaces */
interface Props {
  textColor: "light" | "dark";
  header: string;
  items: any[];
  linkComponent?: React.ReactNode;
  showLink?: true;
  paginated?: true;
  forwardAction?: () => void;
  backAction?: () => void;
  maxColumns: 3 | 4 | 5 | 6 | 7;
  pageForwardComponent?: React.ReactNode;
  pageBackComponent?: React.ReactNode;
  width?: "standard" | "nearFull";
}

/* Component */
const NoCardArticleList: React.FC<Props> = ({
  header,
  items,
  textColor,
  paginated,
  showLink,
  linkComponent,
  pageForwardComponent,
  pageBackComponent,
  maxColumns,
  width,
}) => {
  /* State Variables */
  const [currentPage, setCurrentPage] = useState(1);
  /* End State Variables */

  /* Render Variables */
  const columnRef = {
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
    6: "maxSixColumns",
    7: "maxSevenColumns",
  };

  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };

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
          img={item.img || item.image || item.mainImage}
          link={item.link || item.slug}
          alt={item.alt || item.imageAlt || item.mainImageAlt}
          title={item.title}
          summary={
            item.summary || item.description || item.excerpt || item.snippet
          }
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
    <div
      className={`${styles.NoCardArticleList} ${
        width ? widthRef[width] : null
      }`}
    >
      {paginated ? (
        <div className={styles.headerNavContainer}>
          <h2 className={`primary ${textColor}`}>
            {header ? header : "Header"}
          </h2>
          <div className={styles.pageNav}>
            {pageBackComponent ? (
              pageBackComponent
            ) : (
              <IconTile
                icon={<FaChevronLeft className="twentyFive light" />}
                backgroundColor="gray"
                action={() => setCurrentPage(currentPage - 1)}
                rounded
                rectangular
              />
            )}
            {pageForwardComponent ? (
              pageForwardComponent
            ) : (
              <IconTile
                icon={<FaChevronRight className="twentyFive light" />}
                backgroundColor="mvs-red"
                action={() => setCurrentPage(currentPage + 1)}
                rounded
                rectangular
              />
            )}
          </div>
        </div>
      ) : (
        <h2 className={`primary ${textColor}`}>{header ? header : "Header"}</h2>
      )}
      <div
        className={`${styles.articleContainer} ${
          maxColumns ? columnRef[maxColumns] : columnRef[3]
        }`}
      >
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
              text="All Posts"
            />
          )
        ) : null}
      </div>
    </div>
  );
};

/* Export Statement */
export default NoCardArticleList;

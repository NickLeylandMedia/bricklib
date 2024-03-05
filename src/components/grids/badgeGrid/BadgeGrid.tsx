/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./BadgeGrid.module.scss";

/* Image Imports */

/* Component Imports */
import Badge from "../../cards/badge/Badge";
import TextBadge from "../../cards/textBadge/TextBadge";

/* Module Imports */

/* Component Interfaces */
interface Props {
  badgeType: "withText" | "picOnly";
  header: string;
  items: any[];
  maxColumns: 2 | 3 | 4 | 5;
  rounded: boolean;
}

/* Component */
const BadgeGrid: React.FC<Props> = ({
  badgeType,
  header,
  items,
  maxColumns,
  rounded,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const columnRef = {
    2: "maxTwoColumns",
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
  };

  let renderedBadges: any = <p>No badges to display.</p>;
  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0 && badgeType === "withText") {
    renderedBadges = items.map((item, index) => {
      return (
        <TextBadge
          key={index}
          image={item.image}
          rounded={rounded}
          alt={item.alt}
          text={item.text}
          link={item.link}
        />
      );
    });
  }

  if (items && items.length > 0 && badgeType === "picOnly") {
    renderedBadges = items.map((item, index) => {
      return (
        <Badge
          key={index}
          image={item.image}
          alt={item.alt}
          link={item.link}
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
    <div className={styles.BadgeGrid}>
      <h2 className="primary">{header ? header : "Header"}</h2>
      <div className={`${styles.gridContainer} ${columnRef[maxColumns]}`}>
        {renderedBadges}
      </div>
    </div>
  );
};

/* Export Statement */
export default BadgeGrid;

/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PortraitGrid.module.scss";

/* Image Imports */

/* Component Imports */
import BasicPortraitCard from "../../../components/cards/basicPortraitCard/BasicPortraitCard";
import SimpleSquare from "../../../components/clickables/simpleSquare/SimpleSquare";

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  textClass: "primary" | "secondary" | "tertiary";
  textColor: "light" | "dark";
  maxColumns: 2 | 3 | 4 | 5;
  borderColor?: string;
  items: any[];
}

/* Component */
const PortraitGrid: React.FC<Props> = ({
  header,
  borderColor,
  maxColumns,
  textClass,
  textColor,
  items,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedPortraits: any = <p>No Portraits to Display!</p>;

  const columnRef = {
    2: "maxTwoColumns",
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
  };
  /* End Render Variables */

  /* Render Logic */
  if (items && items.length > 0) {
    renderedPortraits = items.map((item, index) => {
      return (
        <BasicPortraitCard
          key={index}
          borderColor={borderColor}
          linkComponent={
            <SimpleSquare
              type="link"
              textColor="light"
              buttonColor="red"
              text="View"
              link={item.link}
            />
          }
          title={item.title}
          image={item.image}
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
    <div className={`${styles.PortraitGrid}`}>
      <h2 className={`${textClass} ${textColor}`}>
        {header ? header : "Header"}
      </h2>
      <div className={`${styles.gridContainer} ${columnRef[maxColumns]}`}>
        {renderedPortraits}
      </div>
    </div>
  );
};

/* Export Statement */
export default PortraitGrid;

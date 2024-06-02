/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./MinimalPaginator.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "@/components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";

/* Module Imports */

/* Component Interfaces */
interface Props {
  startComponent?: React.ReactNode;
  endComponent?: React.ReactNode;
  forwardComponent?: React.ReactNode;
  backComponent?: React.ReactNode;
  forwardAction?: () => void;
  backAction?: () => void;
  startAction?: () => void;
  endAction?: () => void;
  textColor: "light" | "dark";
  currentPage: number;
  totalPages: number;
}

/* Component */
const MinimalPaginator: React.FC<Props> = ({
  startComponent,
  endComponent,
  forwardComponent,
  backComponent,
  textColor,
  currentPage,
  totalPages,
  forwardAction,
  backAction,
  startAction,
  endAction,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.MinimalPaginator} standardContainer`}>
      {startComponent ? (
        startComponent
      ) : (
        <ColorChangeBorderSquare
          type="button"
          buttonColor="mvs-red"
          text="<<"
        />
      )}
      {backComponent ? (
        backComponent
      ) : (
        <ColorChangeBorderSquare
          type="button"
          buttonColor="mvs-red"
          text="<"
          action={
            backAction ? backAction : () => console.log("No Action Bound")
          }
        />
      )}
      <div className={styles.paginationText}>
        <p className={`${textColor ? textColor : "light"}`}>
          {currentPage} / {totalPages}
        </p>
      </div>
      {forwardComponent ? (
        forwardComponent
      ) : (
        <ColorChangeBorderSquare
          type="button"
          buttonColor="mvs-red"
          text=">"
          action={
            forwardAction ? forwardAction : () => console.log("No Action Bound")
          }
        />
      )}
      {endComponent ? (
        endComponent
      ) : (
        <ColorChangeBorderSquare
          type="button"
          buttonColor="mvs-red"
          text=">>"
        />
      )}
    </div>
  );
};

/* Export Statement */
export default MinimalPaginator;

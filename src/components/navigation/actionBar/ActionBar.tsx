/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./ActionBar.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderToggleSquare from "../../../components/clickables/colorChangeBorderToggleSquare/ColorChangeBorderToggleSquare";

/* Module Imports */

/* Component Interfaces */
interface ActionItem {
  text: string;
  activeAction?: () => void;
  inactiveAction?: () => void;
}

interface Props {
  items: ActionItem[];
  maxColumns: 2 | 3 | 4 | 5;
  color?: string;
  style?: string;
  phColor?: "light" | "dark";
  sorter?: true;
  sortType?: "inclusive" | "exclusive";
  callback: (payload: any) => void;
  initialActive?: string;
}

/* Component */
const ActionBar: React.FC<Props> = ({
  items,
  color,
  maxColumns,
  style,
  sorter,
  sortType,
  callback,
  initialActive,
}) => {
  /* State Variables */
  const [itemsProc, setItemsProc] = React.useState<any[]>([]);
  /* End State Variables */

  /* Render Variables */
  let renderedActions: any = <p>No actions to display.</p>;

  const columnRef = {
    2: "maxTwoColumns",
    3: "maxThreeColumns",
    4: "maxFourColumns",
    5: "maxFiveColumns",
  };
  /* End Render Variables */

  /* Render Logic */
  if (itemsProc.length > 0) {
    renderedActions = itemsProc.map((item, index) => {
      let inactiveFinal;
      if (item.inactiveAction) {
        inactiveFinal = item.inactiveAction;
      } else {
        inactiveFinal = sorter
          ? () =>
              sorterFunction(
                item.text,
                !item.active,
                sortType && sortType === "inclusive" ? "inclusive" : "exclusive"
              )
          : () => console.log("null func");
      }
      let activeFinal;
      if (item.activeAction) {
        activeFinal = item.activeAction;
      } else {
        activeFinal = sorter
          ? () =>
              sorterFunction(
                item.text,
                !item.active,
                sortType && sortType === "inclusive" ? "inclusive" : "exclusive"
              )
          : () => console.log("null func");
      }

      return (
        <ColorChangeBorderToggleSquare
          key={index}
          active={item.active}
          color={color}
          style={style}
          text={item.text}
          activeAction={activeFinal}
          inactiveAction={inactiveFinal}
        />
      );
    });
  }
  /* End Render Logic */

  /* Functions */
  function sorterFunction(
    text: string,
    status: boolean,
    type: "inclusive" | "exclusive" = "inclusive"
  ) {
    setItemsProc((prev) => {
      const proxy = [...prev];
      if (type === "exclusive") {
        proxy.forEach((item) => {
          item.active = false;
        });
      }
      const target = proxy.find((item) => item.text === text);
      if (target) {
        target.active = status;
      }
      callback(proxy);
      return proxy;
    });
  }
  /* End Functions */

  /* Effects */
  React.useEffect(() => {
    const payload = items.map((item) => {
      return { ...item, active: false };
    });
    if (initialActive) {
      const target = payload.find((item) => item.text === initialActive);
      if (target) {
        target.active = true;
      }
    }
    setItemsProc(payload);
  }, []);
  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={`${styles.ActionBar} ${columnRef[maxColumns]}`}>
      {renderedActions}
    </div>
  );
};

/* Export Statement */
export default ActionBar;

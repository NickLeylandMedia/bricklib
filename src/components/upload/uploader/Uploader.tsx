/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import styles from "./Uploader.module.scss";

/* Image Imports */
import { IoMdCloudUpload } from "react-icons/io";

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  color: string;
  buttonElement: any;
}

/* Component */
const Uploader: React.FC<Props> = ({ buttonElement, color }) => {
  /* State Variables */
  const [hoverActive, setHoverActive] = useState(false);
  /* End State Variables */

  const colorVar = `${styles[color]}` || "red";

  /* Render Variables */

  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.Uploader} raisedWhiteCardNoHover narrowContainer ${colorVar}`}
    >
      <div
        className={`${
          hoverActive ? styles.activeDropZone : styles.dropZone
        } red ${colorVar}`}
        onDragOver={() => setHoverActive(true)}
        onDragExit={() => setHoverActive(false)}
        onDragLeave={() => setHoverActive(false)}
      >
        <IoMdCloudUpload className={styles.uploadIcon} />
        <h5 className="primary">
          Drop Files Here <br /> Or
        </h5>
        {buttonElement}
      </div>
    </div>
  );
};

/* Export Statement */
export default Uploader;

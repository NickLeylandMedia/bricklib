/* Library Imports */
//React
import React, { useRef, cloneElement, useState, useEffect } from "react";

/* Stylesheet Imports */
import styles from "./Parser.module.scss";

/* Image Imports */
import { TbFileUpload } from "react-icons/tb";

/* Component Imports */
import ActionBar from "../../global/actionBar/ActionBar";
import SimpleSquare from "../../clickables/simpleSquare/SimpleSquare";

/* Module Imports */
import { parse } from "papaparse";

/* Component Interfaces */
interface Props {
  color: string;
  buttonElement: any;
}

/* Component */
const Parser: React.FC<Props> = ({ color, buttonElement }) => {
  /* State Variables */
  //Input Ref
  const inputRef = useRef<HTMLInputElement>(null);
  //File
  const [file, setFile] = useState<File | null>(null);

  const [parsedData, setParsedData] = useState<any[]>([]);

  const activeVar = file ? styles.uploaded : null;
  /* End State Variables */

  /* Render Variables */
  /* End Render Variables */

  /* Functions */
  function triggerInput() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function logItems() {
    console.log(parsedData);
  }
  /* End Functions */

  /* Effects */
  useEffect(() => {
    if (file) {
      parse(file, {
        header: true,
        complete: (results) => {
          if (results.data.length > 0) {
            setParsedData(results.data);
          }
        },
      });
    }
  }, [file]);

  /* End Effects */

  /* Component Return Statement */
  return (
    <div className={styles.Parser}>
      <div
        className={`${styles.uploadBox} narrowContainer raisedWhiteCardNoHover`}
      >
        <h3 className="primary">Upload/Parse CSV</h3>
        <TbFileUpload className={`${styles.uploadIcon} ${activeVar}`} />
        {file ? <p>{file.name}</p> : <p>Click to upload a file</p>}
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputRef}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
        {cloneElement(buttonElement, {
          action: triggerInput,
          text: file ? "Replace" : "Select",
        })}
      </div>
      {file ? <div className={styles.fileInfo}></div> : null}
      {file ? (
        <ActionBar
          items={[
            <SimpleSquare
              type="button"
              textColor="light"
              buttonColor="mvs-red"
              text="Log Items"
              action={() => logItems()}
            />,
          ]}
        />
      ) : null}
      <div className={styles.payloadBox}></div>
    </div>
  );
};

/* Export Statement */
export default Parser;

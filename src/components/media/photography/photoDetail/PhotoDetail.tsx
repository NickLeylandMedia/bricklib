/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PhotoDetail.module.scss";

/* Image Imports */
import { FiAperture } from "react-icons/fi";
import { IoMdSpeedometer } from "react-icons/io";
import { MdIso } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { IoCamera } from "react-icons/io5";

/* Component Imports */
import Image from "next/image";
import TextRenderer from "@/components/global/textRenderer/TextRenderer";

/* Module Imports */

/* Component Interfaces */
interface Props {
  image: string;
  alt: string;
  date?: string;
  title: string;
  description: any;
  textColor: "light" | "dark";
  width: "standard" | "nearFull";
  iso: string;
  aperture: string;
  shutterSpeed: string;
  focalLength: string;
  camera: string;
}

/* Component */
const PhotoDetail: React.FC<Props> = ({
  alt,
  image,
  title,
  width,
  description,
  iso,
  aperture,
  shutterSpeed,
  focalLength,
  textColor,
  camera,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  const widthRef = {
    standard: "standardContainer",
    nearFull: "wideContainer",
  };
  /* End Render Variables */

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return (
    <div
      className={`${styles.PhotoDetail} ${
        width ? widthRef[width] : "standardContainer"
      }`}
    >
      <h1 className={`${textColor} primary center`}>{title}</h1>
      <Image
        className={styles.photo}
        src={image}
        alt={alt || ""}
        width={1280}
        height={720}
      />
      <div style={{ margin: "20px auto", textAlign: "center", width: "70%" }}>
        {description ? (
          <TextRenderer
            TOCenabled={false}
            textColor={textColor}
            body={description}
          />
        ) : (
          <p className={`${textColor}`}>No description available.</p>
        )}
      </div>
      <h3 className={`${textColor} primary center`}>Photo Information</h3>
      <div className={styles.dataBox}>
        <div className={styles.data}>
          <MdIso className={styles.dataIcon} />
          <p className={`${textColor}`}>ISO: {iso}</p>
        </div>
        <div className={styles.data}>
          <FiAperture className={styles.dataIcon} />
          <p className={`${textColor}`}>Aperture: f/{aperture}</p>
        </div>
        <div className={styles.data}>
          <IoMdSpeedometer className={styles.dataIcon} />
          <p className={`${textColor}`}>Shutter Speed: {shutterSpeed}s</p>
        </div>
        <div className={styles.data}>
          <TbRulerMeasure className={styles.dataIcon} />
          <p className={`${textColor}`}>Focal Length: {focalLength}mm</p>
        </div>
        <div className={styles.data}>
          <IoCamera className={styles.dataIcon} />
          <p className={`${textColor}`}>Camera: {camera}</p>
        </div>
      </div>
      {/* <h3 className={`${textColor} primary center`}>Location Information</h3> */}
    </div>
  );
};

/* Export Statement */
export default PhotoDetail;

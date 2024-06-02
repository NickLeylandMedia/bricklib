/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./VideoCard.module.scss";

/* Image Imports */

/* Component Imports */
import Image from "next/image";
import Link from "next/link";

/* Module Imports */

/* Component Interfaces */
interface Props {
  height: number;
  width: number;
  image: string;
  alt: string;
  slug: string;
  date?: string;
  duration?: string;
  title: string;
  description: string;
}

/* Component */
const VideoCard: React.FC<Props> = ({
  height,
  width,
  image,
  alt,
  slug,
  date,
  duration,
  title,
  description,
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
    <Link href={slug}>
      <div className={`${styles.VideoCard} raisedWhiteCardNoHover`}>
        <Image
          className={styles.videoImage}
          height={height}
          width={width}
          src={image}
          alt={alt}
        />
        <div className={styles.videoCardText}>
          <h3>{title}</h3>
          {date ? <p className={styles.info}>Published On: {date}</p> : null}
        </div>
      </div>
    </Link>
  );
};

/* Export Statement */
export default VideoCard;

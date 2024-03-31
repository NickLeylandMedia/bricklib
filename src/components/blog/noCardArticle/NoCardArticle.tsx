/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./NoCardArticle.module.scss";

/* Image Imports */

/* Component Imports */
import Arrow from "../../clickables/arrow/Arrow";
import Image from "next/image";

/* Module Imports */

/* Component Interfaces */
interface Props {
  title: string;
  link?: string;
  summary: string;
  textColor: "light" | "dark";
  img: string;
  alt: string;
  imgHeight: number;
  imgWidth: number;
  linkComponent?: React.ReactNode;
}

/* Component */
const NoCardArticle: React.FC<Props> = ({
  title,
  summary,
  img,
  alt,
  imgHeight,
  imgWidth,
  linkComponent,
  textColor,
  link,
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
    <div className={styles.NoCardArticle}>
      <Image
        className={styles.noCardImage}
        alt={alt ? alt : "Image"}
        src={img}
        height={imgHeight}
        width={imgWidth}
      />
      <div className={styles.infoBox}>
        <div className={`${styles.titleRow} flexRow flexJustifyBetween`}>
          <h3 className={`primary ${textColor}`}>{title ? title : "Title"}</h3>
          {linkComponent ? (
            linkComponent
          ) : (
            <Arrow direction="right" type="link" link={link} color="mvs-red" />
          )}
        </div>
        <p className={`${textColor}`}>
          {summary
            ? summary
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sed viverra tellus in hac habitasse platea dictumst. Nec nam aliquam sem et tortor consequat id porta. Vitae sapien pellentesque habitant morbi tristique senectus. Vulputate dignissim suspendisse in est ante. Consectetur adipiscing elit ut aliquam purus. Neque vitae tempus quam pellentesque nec nam. Auctor urna nunc id cursus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Arcu cursus vitae congue mauris rhoncus aenean vel. Molestie ac feugiat sed lectus. Aenean euismod elementum nisi quis eleifend quam. Placerat in egestas erat imperdiet sed. Tempor orci eu lobortis elementum. Aliquam ut porttitor leo a diam sollicitudin. Vestibulum morbi blandit cursus risus at ultrices. Libero enim sed faucibus turpis in. Varius duis at consectetur lorem donec massa sapien. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit."}
        </p>
      </div>
    </div>
  );
};

/* Export Statement */
export default NoCardArticle;

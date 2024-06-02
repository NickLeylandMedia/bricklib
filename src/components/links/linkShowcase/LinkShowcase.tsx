/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./LinkShowcase.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "@/components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import Image from "next/image";
import SocialBar from "@/components/global/socialBar/SocialBar";

/* Module Imports */

/* Component Interfaces */
interface Props {
  header: string;
  subHeader: string;
  photo: string;
  photoAlt: string;
  socials: any[];
  links: any[];
}

/* Component */
const LinkShowcase: React.FC<Props> = ({
  header,
  subHeader,
  photo,
  photoAlt,
  socials,
  links,
}) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedLinks: any = <p className="light">No links to display!</p>;
  /* End Render Variables */

  /* Render Logic */
  if (links && links.length > 0) {
    renderedLinks = links.map((link: any) => {
      return (
        <ColorChangeBorderSquare
          type="link"
          key={Math.random()}
          buttonColor="mvs-red"
          link={link.link}
          text={link.text}
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
    <div className={styles.LinkShowcase}>
      <div className={styles.overlayBox}>
        <Image
          className={styles.photo}
          src={photo}
          alt={photoAlt}
          height={200}
          width={200}
        />
        <SocialBar socials={socials} />
        <h2 className="primary light center">{header}</h2>
        <h3 className="primary light center">{subHeader}</h3>
        <div className={styles.linkBox}>{renderedLinks}</div>
      </div>
    </div>
  );
};

/* Export Statement */
export default LinkShowcase;

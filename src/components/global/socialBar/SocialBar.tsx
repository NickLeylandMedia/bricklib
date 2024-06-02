/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./SocialBar.module.scss";

/* Image Imports */
import Image from "next/image";
import Link from "next/link";

/* Component Imports */

/* Module Imports */

/* Component Interfaces */
interface Props {
  socials: any;
}

/* Component */
const SocialBar: React.FC<Props> = ({ socials }) => {
  /* State Variables */
  /* End State Variables */

  /* Render Variables */
  let renderedSocials = <p className="light">No socials to display!</p>;
  /* End Render Variables */

  /* Render Logic */
  if (socials && socials.length > 0) {
    renderedSocials = socials.map((soc: any) => {
      if (soc.isActive) {
        return (
          <Link key={`soc${Math.random()}`} href={soc.link}>
            <Image src={soc.image} alt={soc.alt} height={50} width={50} />
          </Link>
        );
      }
    });
  }

  /* Functions */
  /* End Functions */

  /* Effects */
  /* End Effects */

  /* Component Return Statement */
  return <div className={styles.SocialBar}>{renderedSocials}</div>;
};

/* Export Statement */
export default SocialBar;

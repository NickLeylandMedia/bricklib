/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./PhotoServices.module.scss";

/* Image Imports */

/* Component Imports */
import ColorChangeBorderSquare from "@/components/clickables/colorChangeBorderSquare/ColorChangeBorderSquare";
import Image from "next/image";

/* Module Imports */

/* Component Interfaces */
interface Props {
  width?: "standard" | "nearFull";
  textColor: "light" | "dark";
  headerAlignment: "left" | "center" | "right";
}

/* Component */
const PhotoServices: React.FC<Props> = ({
  textColor,
  width,
  headerAlignment,
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
      className={`${styles.PhotoServices} ${width ? widthRef[width] : null}`}
    >
      <h1 className={`primary ${textColor} ${headerAlignment}`}>
        Photography Services
      </h1>
      <p className={`${textColor}`}>
        I offer a full range of photography services, including drone
        photography, regular photography, and professional editing. Whether you
        need breathtaking aerial shots, beautiful portraits, or expertly edited
        images, I&apos;ve got you covered!
      </p>
      <div className={styles.serviceBox}>
        <Image
          className={styles.serviceImage}
          height={400}
          width={400}
          src={"/drone.jpg"}
          alt={"lake hayward drone shot"}
        />
        <div className={styles.descBox}>
          <h2 className={`${textColor} primary`}>Drone Photography</h2>
          <p className={`${textColor} ${styles.serviceDescription}`}>
            My drone photography services offer a unique way to capture stunning
            photos and videos from above. Perfect for real estate, weddings,
            events, and landscapes, my drone can get angles and views that
            regular cameras can&apos;t. Whether you want to showcase a property,
            create memorable wedding shots, or just explore new perspectives,
            I&apos;ll provide high-quality, creative images that stand out!
            I&apos;m also professionally licensed and insured!
          </p>
        </div>
      </div>
      <div className={styles.serviceBox}>
        <div className={styles.descBox}>
          <h2 className={`${textColor} primary`}>Photoshoots</h2>
          <p className={`${textColor} ${styles.serviceDescription}`}>
            I offer personalized photography services that capture the special
            moments in your life. Whether it&apos;s for family portraits,
            engagements, events, or just a fun photoshoot, I&apos;ll work with
            you to create beautiful images. My goal is to provide you with
            stunning shots that you&apos;ll cherish for years to come!
          </p>
        </div>
        <Image
          className={styles.serviceImage}
          height={400}
          width={400}
          src={"/ajj.jpg"}
          alt={"couple posing together in front of masonry"}
        />
      </div>
      <div className={styles.serviceBox}>
        <Image
          className={styles.serviceImage}
          height={400}
          width={400}
          src={"/editservice.jpg"}
          alt={"editing programs"}
        />
        <div className={styles.descBox}>
          <h2 className={`${textColor} primary`}>Photo + Video Editing</h2>
          <p className={`${textColor} ${styles.serviceDescription}`}>
            I offer professional photo and video editing services to bring out
            the best in your creative projects. Whether you need retouching,
            color correction, or creative effects, I can transform your photos
            and videos into stunning works of art. With a keen eye for detail
            and a commitment to bringing your vision to life, I&apos;ll ensure
            your final product looks polished and professional. Let me help you
            make your memories and projects truly shine!
          </p>
        </div>
      </div>
      <h2 className={`primary ${textColor} ${headerAlignment}`}>
        Have a project for me? Let&apos;s work together!
      </h2>
      <ColorChangeBorderSquare
        buttonColor="mvs-red"
        type="link"
        text={"Get In Touch!"}
        link={"/contact"}
      />
    </div>
  );
};

/* Export Statement */
export default PhotoServices;

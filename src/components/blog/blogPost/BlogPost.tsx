/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import styles from "./BlogPost.module.scss";

/* Image Imports */

/* Component Imports */
import NoCardTitle from "../noCardTitle/NoCardTitle";
import CatsAndTags from "../catsAndTags/CatsAndTags";
import TextRenderer from "../../global/textRenderer/TextRenderer";

/* Module Imports */

/* Component Interfaces */
interface Props {
  title: string;
  subTitle: string;
  datePublished: string;
  image: string;
  alt: string;
  imgHeight: number;
  imgWidth: number;
  textColor: "light" | "dark";
  imageGlowColor: string;
  body: any;
  cats: any[];
  tags: any[];
}

/* Component */
const BlogPost: React.FC<Props> = ({
  title,
  subTitle,
  datePublished,
  image,
  alt,
  imgHeight,
  imgWidth,
  textColor,
  imageGlowColor,
  body,
  cats,
  tags,
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
    <div className={`${styles.BlogPost}`}>
      <NoCardTitle
        title={title}
        subTitle={subTitle}
        datePublished={datePublished}
        image={image}
        alt={alt}
        imgHeight={imgHeight}
        imgWidth={imgWidth}
        textColor={textColor}
        imageGlowColor={imageGlowColor}
      />
      <CatsAndTags
        cats={cats}
        tags={tags}
        textColor={textColor}
        headerClass={"primary"}
      />
      <div className="light standardContainer">
        {/* <PortableText value={body} /> */}
        <TextRenderer body={body} textColor={"light"} TOCenabled />
      </div>
    </div>
  );
};

/* Export Statement */
export default BlogPost;

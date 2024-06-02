/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import styles from "./NoCardArticle.module.scss";

/* Image Imports */

/* Component Imports */
import Arrow from "../../clickables/arrow/Arrow";
import Image from "next/image";
import SimplePill from "@/components/clickables/simplePill/SimplePill";

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
  date?: string;
  cats?: any[];
  tags?: any[];
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
  date,
  cats,
  tags,
}) => {
  /* State Variables */
  const [catsFinal, setCatsFinal] = useState<any[]>([]);
  const [tagsFinal, setTagsFinal] = useState<any[]>([]);
  /* End State Variables */

  /* Render Variables */
  const renderedDate = date ? new Date(date).toLocaleDateString() : "Unknown";
  let renderedCats: any;
  let renderedTags: any;
  /* End Render Variables */

  /* Render Logic */
  if (catsFinal && catsFinal.length > 0) {
    renderedCats = catsFinal.map((cat, index) => (
      <SimplePill
        key={index}
        text={cat}
        textColor={textColor}
        buttonColor="mvs-blue"
        type="link"
        link={`/blog/categories/${cat.toLowerCase()}`}
      />
    ));
  }
  if (tagsFinal && tagsFinal.length > 0) {
    renderedTags = tagsFinal.map((tag, index) => (
      <SimplePill
        key={index}
        text={tag}
        textColor={textColor}
        buttonColor="mvs-red"
        type="link"
        link={`/blog/tags/${tag.toLowerCase()}`}
      />
    ));
  }
  /* End Render Logic */

  /* Functions */
  /* End Functions */

  /* Effects */
  useEffect(() => {
    const textCats = cats?.map((cat) => cat.name) || [];
    const textTags = tags?.map((tag) => tag.name) || [];
    setCatsFinal(textCats);
    setTagsFinal(textTags);
  }, [cats, tags]);
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

        <p className={`${textColor}`}>Published On: {renderedDate}</p>
        <p className={`${textColor}`}>
          {summary
            ? summary
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sed viverra tellus in hac habitasse platea dictumst. Nec nam aliquam sem et tortor consequat id porta. Vitae sapien pellentesque habitant morbi tristique senectus. Vulputate dignissim suspendisse in est ante. Consectetur adipiscing elit ut aliquam purus. Neque vitae tempus quam pellentesque nec nam. Auctor urna nunc id cursus. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Arcu cursus vitae congue mauris rhoncus aenean vel. Molestie ac feugiat sed lectus. Aenean euismod elementum nisi quis eleifend quam. Placerat in egestas erat imperdiet sed. Tempor orci eu lobortis elementum. Aliquam ut porttitor leo a diam sollicitudin. Vestibulum morbi blandit cursus risus at ultrices. Libero enim sed faucibus turpis in. Varius duis at consectetur lorem donec massa sapien. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit."}
        </p>
        <div className={styles.catTagBox}>
          {renderedCats}
          {renderedTags}
        </div>
      </div>
    </div>
  );
};

/* Export Statement */
export default NoCardArticle;

/* Library Imports */
//Groq
import groq from "groq";
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import DarkNav from "@/components/navigation/darkNav/DarkNav";

/* Module Imports */
import { client, urlFor } from "../../modules/sanity";
import { getAllGirls, getAllGuys } from "@/modules/api/adultBase/get";

/* Component Interfaces */
interface Props {
  cats: any[];
  posts: any[];
  girls: any[];
  guys: any[];
}

/* Component */
const Blog: React.FC<Props> = ({ cats, posts, girls, guys }) => {
  console.log({ guys });
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
    <div className="Blog page">
      {/* Header Start */}
      <header>
        <DarkNav
          links={[
            { text: "Home", url: "/", fontClass: "primary", icon: "home" },
            {
              text: "About",
              url: "/about",
              fontClass: "primary",
              icon: "about",
            },
            {
              text: "Media",
              url: "/projects",
              fontClass: "primary",
              icon: "projects",
            },
            {
              text: "Contact",
              url: "/contact",
              fontClass: "primary",
              icon: "contact",
            },
            {
              text: "Blog",
              url: "/blog",
              fontClass: "primary",
              icon: "blog",
            },
            {
              text: "Shop",
              url: "/shop",
              fontClass: "primary",
              icon: "shop",
            },
          ]}
        />
      </header>
      {/* Header End */}
      {/* Content Start */}
      <div className="mainContent"></div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Server-Side Rendering Logic */
export async function getStaticProps() {
  //Fetch girls
  const girls = await getAllGirls();
  //Fetch guys
  const guys = await getAllGuys();

  //Fetch Post Categories
  const cats = await client.fetch(groq`
    *[_type == "postCategory"][]{
      name
    }`);

  //Fetch Blog Posts
  const posts = await client.fetch(groq`
    *[_type == "post"][]{
      title, slug, author->{name, image}, mainImage, mainImageAlt, categories[]->{name}, publishedAt, galleryLink, videoLink, body, tags[]->{name}, summary
    }`);

  return {
    props: {
      cats,
      posts,
      girls,
      guys,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default Blog;

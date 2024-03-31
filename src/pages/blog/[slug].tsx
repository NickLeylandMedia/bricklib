/* Library Imports */
//Groq
import groq from "groq";
//React
import React from "react";

/* Stylesheet Imports */

/* Image Imports */

/* Component Imports */
import BlogPost from "@/components/blog/blogPost/BlogPost";
import DarkNav from "@/components/navigation/darkNav/DarkNav";

/* Module Imports */
import { client, urlFor } from "../../modules/sanity";
/* Component Interfaces */
interface Props {
  post: any;
}

/* Component */
const PostDetail: React.FC<Props> = ({ post }) => {
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
    <div className="PostDetail page">
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
      <div className="mainContent">
        <BlogPost
          title={post.title}
          subTitle={post.summary}
          datePublished={post.publishedAt}
          image={urlFor(post.mainImage).url()}
          alt={post.mainImageAlt}
          imgHeight={1080}
          imgWidth={1920}
          textColor="light"
          imageGlowColor="red"
          body={post.body}
        />
      </div>
      {/* Content End */}
      {/* Footer Start */}
      {/* <Footer /> */}
      {/* Footer End */}
    </div>
  );
};

/* Server-Side Rendering Logic */
//Query Variable
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title, summary, slug, author->{name}, mainImage, mainImageAlt, categories[]->{name}, publishedAt, galleryLink, videoLink, body, tags[]->{name}
}`;

//Get Static Paths
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

//Get Static Props
export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

/* Export Statement */
export default PostDetail;

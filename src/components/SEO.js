import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        twitterUsername
        siteTitle: title
        siteUrl
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const {
    siteDesc, siteTitle, siteUrl,
    twitterUsername, image
  } = site.siteMetadata;
  return <Helmet htmlAlttributes={{ lang: "en" }}
                 tittle={`${title}|${siteTitle}`}>
    <meta name="description" content={description || siteDesc} />
    <meta name="image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDesc} />
    <meta name="twitter:image" content={`${siteUrl}${image}`} />
  </Helmet>;
};

export default SEO;

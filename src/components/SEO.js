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
    <meta name="image" content={image}/>
  </Helmet>;
};

export default SEO;

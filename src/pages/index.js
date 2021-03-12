import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO";

export default ({data}) => {

  const {allStrapiProjects: {nodes: projects},
    allStrapiBlogs: {nodes: blogs}}=data
  return <Layout>
    <SEO title="Home" description="this is a homepage"/>
    <Hero/>
    <Services/>
    <Jobs/>
    <Projects projects={projects} title="featured projects"
    showLink/>
    <Blogs blogs={blogs} title="Blog" showLink/>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        title
        description
        github
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
    allStrapiBlogs(sort: {order: DESC, fields: date}) {
      nodes {
        slug
        content
        description
        date(formatString: "MMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
                            ...GatsbyImageSharpFluid

            }
          }
        }
      }
    }
  }
`


import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        stack {
          id
          name
        }
        title
        info
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


const About = ({data:{
  about:{nodes},
}}) => {
  const {title,stack,info,image}=nodes[0]

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img"/>
        <article className="about-text">
          <Title tittle={title}/>
          <p>{info}</p>
          <div className="about-stack">
            {
              stack.map(item=>{
                return <span key={item.id}>{item.name}</span>
              })
            }
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export default About

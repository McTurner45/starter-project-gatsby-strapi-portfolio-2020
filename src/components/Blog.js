import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({id,title,image,date,category,slug,description}) => {
  return <Link to={`/blogs/${slug}`} key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid} className="blog-img"/>
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
}

Blog.propTypes = {}

export default Blog

import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        description {
          id
          name
        }
        possition
        strapiId
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs }
  } = data

  const [value, setValue] = React.useState(0)

  const { company, possition, date, description } = jobs[value]

  return <section className="section jobs">
    <Title tittle="experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {
          jobs.map((item, index) => {
            return <button
              key={item.strapiId}
              onClick={() => setValue(index)}
              className={`job-btn ${
                index === value && "active-btn"}`}>
              {item.company}
            </button>
          })
        }
      </div>
      <article className="job-info">
        <h3>{possition}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          description.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export default Jobs

import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
const Service = ({description,title,image,index}) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid}
      className="project-img" />
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">
          {description}
        </p>
      </div>
    </article>
  )
}

Service.propTypes = {}

export default Service

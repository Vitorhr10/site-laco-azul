import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
const Service = ({description,title,image,index}) => {
  return (
    <article className="service">
      <Image fluid={image.childImageSharp.fluid}
      className="service-img" />
      <div className="service-info">
        <h3>{title}</h3>
        <p className="service-desc">
          {description}
        </p>
      </div>
    </article>
  )
}

Service.propTypes = {}

export default Service

import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
const Service = ({description,title,image,index}) => {
  return (
    <article className="service">
      {image && (
        <Image fluid={image.childImageSharp.fluid}
        className="service-img" />
      )}
      <div className="service-info">
        <h3>{title || "default title"}</h3>
        <p className="service-desc">
          {description}
        </p>
      </div>
    </article>
  )
}

Service.propTypes = {
  title:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  description:PropTypes.string.isRequired
}

export default Service

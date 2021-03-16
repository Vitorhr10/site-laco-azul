import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="todas notícias" />
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit:3) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }
}`

export default Blog

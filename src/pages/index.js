import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Company from "../components/Company"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    allStrapiServices:{nodes:services},
    allStrapiBlogs:{nodes:blogs}
  } = data

  return (
    <Layout>
      <Hero />
      <Company />
      <Services services={services} title="principais serviços" showLink/>
      <Blogs blogs={blogs} title="blog" showLink/>
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiServices(filter: {featured: {eq: true}}) {
    nodes {
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  allStrapiBlogs(sort: {fields: date, order: DESC}, limit:3) {
    nodes {
      slug
      content
      desc
      date(formatString: "MMMM Do, YYYY")
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

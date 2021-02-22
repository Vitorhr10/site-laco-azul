import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Company from "../components/Company"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {allStrapiServices:{nodes:services}} = data

  return (
    <Layout>
      <Hero />
      <Company />
      <Services services={services} title="principais serviços" showLink/>
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
  }
`

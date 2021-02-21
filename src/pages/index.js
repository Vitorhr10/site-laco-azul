import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Company from "../components/Company"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return (
    <Layout>
      <Hero />
      <Company />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

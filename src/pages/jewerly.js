import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    file(relativePath: {eq: "jewerly.jpg"}) {
      childImageSharp {
        fixed(width:800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  
`

const JewerlyPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <Img 
      fixed={data.file.childImageSharp.fixed}
      alt="assortment of fine jewerly"
    /> 
    <h2>Studio Jewerly</h2>
    <p>Did you know that I am an amateur silversmith?</p>
  </Layout>
)

export default JewerlyPage

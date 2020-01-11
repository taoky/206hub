import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <h2>所有分类</h2>
    {data.allFile.edges.map(({node}) => (
      <div key={node.id}>
        <p>{node.relativePath}</p>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          relativePath
        }
      }
    }
  }
`

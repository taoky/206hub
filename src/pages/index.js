import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <h2>所有分类</h2>
    {data.allCollection.nodes.map((node) => (
      <Link to={`/${node.slug}`} key={node.id}>
        <div>
          <p>{node.name}</p>
        </div>
      </Link>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allCollection {
      nodes {
        id
        name
        slug
      }
    }
  }
`

import React from "react"

import Layout from "../components/layout"

export default function Collection(props) {
  return (
    <Layout>
      <h2>{props.pageContext.name}</h2>
    </Layout>
  )
}

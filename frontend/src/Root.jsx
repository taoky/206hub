import React, { useEffect } from "react"
import data from "../static/json/206hub.json"

const Root = React.memo(() => {
  useEffect(() => {
    console.log(data)
  })

  return (
    <div>
      <h1>206hub</h1>
      <h2>所有分类</h2>
    </div>
  )
})

Root.displayName = "Root"

export default Root

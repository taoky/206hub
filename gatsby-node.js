const fs = require("fs")
const yaml = require("js-yaml")
const path = require(`path`)


function loadYAML(filename) {
  return yaml.load(fs.readFileSync(filename, "utf-8"))
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // create collection main pages
  const result = await graphql(`
    query {
      allCollection {
        nodes {
          name
          slug
        }
      }
    }
  `)

  result.data.allCollection.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/collection.js`),
      context: {
        name: node.name,
        slug: node.slug
      }
    })
  })
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const authors = loadYAML("./src/data/authors.yaml")
  const collections = loadYAML("./src/data/collections.yaml")

  for (let refname in authors) {
    const node = {
      refname: refname,
      name: authors[refname].name,
      avatar: authors[refname].avatar,
      id: createNodeId(`Author-${refname}`),
      internal: {
        type: "Author",
        contentDigest: createContentDigest(authors[refname])
      },
    }
    actions.createNode(node)
  }

  for (let slug in collections) {
    const node = {
      slug: slug,
      name: collections[slug].name,
      id: createNodeId(`Collection-${slug}`),
      internal: {
        type: "Collection",
        contentDigest: createContentDigest(collections[slug])
      },
    }
    actions.createNode(node)
  }
}
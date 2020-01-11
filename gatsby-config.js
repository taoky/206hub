module.exports = {
  siteMetadata: {
    title: "206hub",
    description: "A static listing & commenting website",
  },
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

module.exports = {
  siteMetadata: {
    title: "Clinical Research Unit",
    titleTemplate: "CRU · %s",
    description: `Working with researchers in the Cumming School of Medicine to support the delivery of cutting edge research support services in the areas of data, technology and methodology.`,
    url: "https://cru-prototype.researchcalgary.ca/",
    siteUrl: "https://cru-prototype.researchcalgary.ca/",
    image: "src/images/cru-hash.png",
    twitterUsername: "@crucalgary",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/cru-hash.png`
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cru-prototype.researchcalgary.ca/',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }

  ],
}

module.exports = {
  siteMetadata: {
    title: 'Clinical Research Unit',
    titleTemplate: 'CRU · %s',
    description: `Working with researchers in the Cumming School of Medicine to support the delivery of cutting edge research support services in the areas of data, technology and methodology.`,
    url: 'https://cru.ucalgary.ca/',
    siteUrl: 'https://cru.ucalgary.ca/',
    image: 'src/images/cru-hash.png',
    twitterUsername: '@crucalgary',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-125543132-3',
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `Clinical Research Unit`,
        short_name: `CRU`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/cru-hash.png`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cru.ucalgary.ca/',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}

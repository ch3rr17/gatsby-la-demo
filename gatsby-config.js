module.exports = {
  siteMetadata: {
    title: `Gatsby New Header`,
    description: `This site choronicles Cherr's favorite site.`,
    author: `Cherr Batac`,
    keywords: `blog`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/cherr17`
      },
      {
        name: `GitHub`,
        url: `https://github.com/ch3rr17`
      }
    ],
    menuLinks: [
      {
        name: `Speaking`,
        link: `/speaking`
      },
      {
        name: `Page`,
        link: `/page-2`
      },
    ]
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`
      }
    },
    `gatsby-plugin-emotion`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

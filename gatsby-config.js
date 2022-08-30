module.exports = {
  siteMetadata: {
    title: "Tony",
    description: `Tony Cui's Personal Website`,
    author: `Tony Cui`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};

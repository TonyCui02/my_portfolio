module.exports = {
  siteMetadata: {
    title: `Tony Cui's personal website`,
    author: {
      name: `Tony Cui`,
      summary: `Software Engineering at university of Auckland, aspiring full stack engineer, interested in UI and UX design`,
    },
    description: `Hi I'm Tony, this is my website where I sometimes post about my hobbies and things I've learnt. `,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `kylemathews`,
    },
  },
  plugins: [
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
        name: `Tony Cui's Website`,
        short_name: `TonyBlog`,
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

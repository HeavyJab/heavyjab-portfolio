require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `vincent_lam`,    
    siteTitleAlt: `Vincent Lam - Machine Learning and Software Development`,
    siteHeadline: `Personal website of Vincent Lam`,
    siteUrl: `https://heavyjab.com`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [          
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact Me`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/HeavyJab`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/vincent-lam-52868698/`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/vincentlam0912`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vincent Lam - Machine Learning and Software Development`,
        short_name: `vincent|lam`,
        description: `Vincent Lam. Machine Learning. Software Development. Complexity Science.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}

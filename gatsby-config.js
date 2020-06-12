/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        siteUrl: `https:/dorhan.fr`,
        author: `Orhan Donovan`,
        defaultLanguage: 'en',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-react-svg`,
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,
        `gatsby-transformer-json`,
        `gatsby-remark-prismjs`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            aliases: { sh: "bash", js: "javascript" },
                            showLineNumbers: false,
                        }
                    }],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `data`,
                path: `${__dirname}/src/data`
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`300`, `400`, `500`]
                    },
                ],
            },
        }
    ],
}

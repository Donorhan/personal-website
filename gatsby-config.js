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
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dorhan`,
                short_name: `Dorhan`,
                start_url: `/`,
                background_color: `#4b81c3`,
                description: `Freelance web, mobile and video game developer`,
                lang: `en`,
                theme_color: `#4b81c3`,
                display: `standalone`,
                icon: `static/img/avatar.png`,
                icons: [
                    {
                        src: `favicons/icon-48x48.png`,
                        sizes: `48x48`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-72x72.png`,
                        sizes: `72x72`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-96x96.png`,
                        sizes: `96x96`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-144x144.png`,
                        sizes: `144x144`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-256x256.png`,
                        sizes: `256x256`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-384x384.png`,
                        sizes: `384x384`,
                        type: `image/png`,
                    },
                    {
                        src: `favicons/icon-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/project/*`, `/blog`, `/posts/*`],
            },
        },
    ],
}

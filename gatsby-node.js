const fs = require('fs');
const { createFilePath, } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
    // Load projects
    const projects = JSON.parse(fs.readFileSync('./src/data/projects.json', { encoding: 'utf-8' }));
    projects.forEach((project) => {
        console.log("test", project.name.split(' ').join('-').toLowerCase());
        createPage({
            path: `/project/${project.name.split(' ').join('-').toLowerCase()}/`,
            component: require.resolve("./src/templates/project.js"),
            context: { project },
        })
    })

    // Load blog posts
    const blogPostQuery = await graphql(`
        {
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    fields{
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
        }
    `);

    if (blogPostQuery.errors) {
        console.error(blogPostQuery.errors)
        return;
    }

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
    const posts = blogPostQuery.data.allMarkdownRemark.edges;
    posts.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
                prev: index === 0 ? null : posts[index - 1],
                next: index === blogPostQuery.length - 1 ? null : posts[index + 1],
            },
        })
    })
}

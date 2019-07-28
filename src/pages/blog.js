import { graphql, Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/layouts/default/Layout';

export default ({ data: { allMarkdownRemark } }) => (
    <Layout goBackHome>
        <Helmet>
            <title>Blog - Donovan Orhan</title>
            <meta name="description" content="The blog" />
        </Helmet>
        <section className="text-centered" style={{ paddingBottom: '30px' }}>
            <Container>
                <h1 className="h1">Welcome to my blog!</h1>
                <p>
                    The purpose of this blog is first and foremost to talk about my projects under development in order to keep track of them. It is also a way for me to stay motivated on my projects while presenting them to you. This blog will mainly talk about my game under development: <Link to="/posts/introducing-echo/">Echo</Link>.
                </p>
            </Container>
        </section>
        <section className="without-padding">
            <Container>
                <h1 className="h2">Articles</h1>
                <div className="two-columns-grid">
                    {allMarkdownRemark.edges.map(({ node }, index) => (
                        <Link to={node.fields.slug} key={index.toString()} aria-label={`Read more`}>
                            <div className="blog-post-card">
                                <div className="background" style={{ backgroundImage: `url(${node.frontmatter.image}` }} />
                                <div className="content">
                                    <h2>{node.frontmatter.title}</h2>
                                    <p>{node.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    </Layout>
);

export const listQuery = graphql`
    query ListQuery {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 125)
                    frontmatter {
                        date(formatString: "MMMM Do YYYY")
                        image
                        title
                    }
                }
            }
        }
    }
`
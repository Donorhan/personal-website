import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../components/Container';
import Layout from '../components/layouts/default/Layout';
import PrevNext from '../components/PrevNext';

export default (props) => {
    const post = props.data.markdownRemark;
    const { title, date } = post.frontmatter;
    const { prev, next } = props.pageContext;

    return (
        <Layout goBackHome>
            <Helmet>
                <title>{title} - Donovan Orhan</title>
                <meta name="description" content="The blog" />
            </Helmet>
            <section className="article">
                <Container>
                    <h1 className="h1">{title}</h1>
                    {date}
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Container>
            </section>
            <section className="article without-padding">
                <Container>
                    <div>
                        <PrevNext prev={prev && prev.node} next={next && next.node} />
                    </div>
                </Container>
            </section>
        </Layout>
    );
};

export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        excerpt
        frontmatter {
            title
        }
    }
}`;
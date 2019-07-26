import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from "react-helmet";
import Container from '../components/Container';
import Layout from '../components/layouts/default/Layout';

export default () => (
    <Layout goBackHome>
        <Helmet>
            <title>404 - Donovan Orhan</title>
        </Helmet>
        <section className="text-centered">
            <Container>
                <img src="../img/foxrush/duck.png" alt="the stupid duck" />
                <h1 className="h1">This is awkward … this page doesn't exist!</h1>
                <p>
                    Sorry, but the page you were looking for was not found. Perhaps you clicked an outdated link or I moved the page.
                </p>
                <Link to="/">Go back to the homepage</Link>
            </Container>
        </section>
    </Layout>
);

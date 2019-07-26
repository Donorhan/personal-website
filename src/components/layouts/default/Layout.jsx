import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, goBackHome }) => (
    <Fragment>
        <Helmet>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>Web and video game developer - Donovan Orhan</title>
            <link rel="canonical" href="https://dorhan.fr" />
            <meta name="description" content="My personal website with my work" />
            <meta property="og:title" content="Web and video game developer - Donovan Orhan" />
            <meta property="og:description" content="My personal website with my work" />
            <meta property="og:url" content="https://dorhan.fr" />
            <meta property="og:image" content="http://dorhan.fr/img/thumbnail.jpg" />
            <meta property="og:image:secure_url" content="https://dorhan.fr/img/thumbnail.jpg" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="210" />
        </Helmet>
        <Header goBackHome={goBackHome} />
        <main role="main">
            {children}
        </main>
        <Footer />
    </Fragment>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    goBackHome: PropTypes.bool,
};

export default Layout;

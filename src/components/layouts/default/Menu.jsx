import { Link } from "gatsby";
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import './Menu.scss';

const scrollTo = (identifier) => {
    const element = document.getElementById(identifier);
    element.scrollIntoView({
        behavior: 'smooth'
    });
};

const Menu = ({ goBackHome }) => (
    <nav>
        <ul>
            {goBackHome && (
                <Fragment>
                    <li><Link to="/">Home</Link></li>
                </Fragment>
            )}
            {!goBackHome && (
                <Fragment>
                    <li><a href="blog">Blog</a></li>
                    <li><button type="button" className="link" onClick={() => scrollTo('work')}>Work</button></li>
                    <li><button type="button" className="link" onClick={() => scrollTo('tools')}>Tools</button></li>
                    <li><button type="button" className="link" onClick={() => scrollTo('about')}>About</button></li>
                </Fragment>
            )}
        </ul>
    </nav>
);

Menu.propTypes = {
    goBackHome: PropTypes.bool,
};

export default Menu;

import { Link } from "gatsby";
import PropTypes from 'prop-types';
import React from 'react';
import Container from '../../Container';
import './Header.module.scss';
import Logo from './Logo';
import Menu from './Menu';

const Header = ({ goBackHome }) => (
    <header>
        <Container>
            <Link to="/">
                <Logo />
            </Link>
            <Menu goBackHome={goBackHome} />
        </Container>
    </header>
);

Header.propTypes = {
    goBackHome: PropTypes.bool,
};

export default Header;

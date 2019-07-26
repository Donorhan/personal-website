import PropTypes from 'prop-types';
import React from 'react';
import containerStyles from './Container.module.scss';

const Container = ({ children }) => <div className={containerStyles.container}>{children}</div>;

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;

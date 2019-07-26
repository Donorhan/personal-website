import PropTypes from 'prop-types';
import React from 'react';
import containerStyles from './SkillContainer.module.scss';

const SkillContainer = ({ children }) => <div className={containerStyles.container}>{children}</div>;

SkillContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SkillContainer;

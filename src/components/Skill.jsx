import PropTypes from 'prop-types';
import React from 'react';
import './Skill.scss';

const Skill = ({ name, url, image }) => (
    <a
        className="skill"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
    >
        <img src={image} alt="" />
        <span>{name}</span>
    </a>
);

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Skill;

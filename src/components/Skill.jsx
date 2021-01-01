import Img from 'gatsby-image';
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
        <Img fixed={image} />
        <span>{name}</span>
    </a>
);

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        srcWebp: PropTypes.string,
    }),
};

export default Skill;

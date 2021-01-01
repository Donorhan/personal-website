import { Link } from 'gatsby';
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss';

const Card = ({ title, image }) => (
    <div className="card">
        <Link to={`/project/${title.split(' ').join('-').toLowerCase()}`} aria-label={`Read more about ${title}`}>
            <figure>
                <Img fixed={image} />
                <div className="content">
                    <span>{title}</span>
                </div>
            </figure>
        </Link>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string.isRequired,
        srcWebp: PropTypes.string,
    }).isRequired,
};

export default Card;

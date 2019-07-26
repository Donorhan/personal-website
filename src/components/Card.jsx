import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss';

const Card = ({ title, image }) => (
    <div className="card">
        <Link to={`/project/${title}`} aria-label={`Read more about ${title}`}>
            <figure>
                <img src={image} alt="" />
                <div className="content">
                    <span>{title}</span>
                </div>
            </figure>
        </Link>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card;

import PropTypes from 'prop-types';
import React from 'react';
import containerStyles from './CardContainer.module.scss';
import Card from '../components/Card';
import PivotWrapper from '../components/PivotWrapper';

const CardContainer = ({ cards }) => (
    <PivotWrapper selector=".card figure">
        <div className={containerStyles.container}>
            {cards.map(({ node: { name, thumbnail, url } }, index) => <Card key={index.toString()} title={name} image={thumbnail.childImageSharp.fixed} url={url} />)}
        </div>
    </PivotWrapper>
);

CardContainer.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default CardContainer;

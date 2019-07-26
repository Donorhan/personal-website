import PivotWrapper from '../components/PivotWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import './ImageGallery.scss';

const ImageGallery = ({ images }) => (
    <PivotWrapper selector=".tile > div">
        <div className="gallery">
            {images.map((image, index) => (
                <div className="tile" key={index.toString()}>
                    <div style={{ backgroundImage: `url(${image})` }} />
                </div>
            ))}
        </div>
    </PivotWrapper>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;

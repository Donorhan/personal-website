import PivotWrapper from '../components/PivotWrapper';
import Img from "gatsby-image";
import PropTypes from 'prop-types';
import React from 'react';
import './ImageGallery.scss';

const ImageGallery = ({ images }) => (
    <PivotWrapper selector=".tile > div">
        <div className="gallery">
            {images.map((image, index) => (
                <div className="tile" key={index.toString()}>
                    <div>
                        <Img fixed={image.node.childImageSharp.fixed} />
                    </div>
                </div>
            ))}
        </div>
    </PivotWrapper>
);

export default ImageGallery;

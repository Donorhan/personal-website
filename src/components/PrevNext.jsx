import PropTypes from 'prop-types';
import React from 'react';
import containerStyles from './PrevNext.module.scss';

const PrevNext = ({ prev, next }) => (
    <ul className={containerStyles.noStyle}>
        {prev && <li><a href={prev.fields.slug}>
            &laquo; Previous {" "}
            {prev.frontmatter.title}</a></li>}
        {next && <li style={{ float: 'right' }}><a href={next.fields.slug}>
            &raquo; Next  {" "} {next.frontmatter.title}
        </a></li>}
    </ul>
);

PrevNext.propTypes = {
    next: PropTypes.shape({}),
    prev: PropTypes.shape({}),
};

export default PrevNext;
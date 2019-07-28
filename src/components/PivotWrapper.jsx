import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PivotWrapper extends Component {
    componentDidMount() {
        const { selector } = this.props;

        try {
            require('../../static/js/pivotjs/pivot')(window, document);
            window.pivot.init({
                selector,
                shine: true,
                perspective: 500,
                sensitibity: 15,
                scale: true,
                shadow: true,
            });
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        const { children } = this.props;

        return (
            <div>
                {children}
            </div>
        );
    }
}

PivotWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PivotWrapper;

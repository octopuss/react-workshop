import React, { PropTypes } from 'react';
import './button.scss';

const Button = props => {
    const {label, ...otherProps} = props;
    return (
        <div className="Button">
            <button className="Button-control" {...otherProps}>{label}</button>
        </div>
    );
};

Button.propTypes = {
    label: PropTypes.string
};
export default  Button;

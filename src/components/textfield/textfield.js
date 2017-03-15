import React, { PropTypes } from 'react';
import './textfield.scss';

const TextField = props => {
    const { label, name, onChange, value, ...otherProps } = props;
    return (
        <div className="TextField">
            <label htmlFor={name} className="TextField-label">{label}</label>&nbsp;
            <input name={name} type="text" className="TextField-control" onChange={onChange} value={value} {...otherProps}/>
        </div>
    );
};

TextField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextField;

import React, { Component, PropTypes } from 'react';
import './textfield.scss';

const TextField = (props) => {
    const { label, name, onChange, value } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>&nbsp;
            <input className="TextField" name={name} type="text" onChange={onChange} value={value}/>
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

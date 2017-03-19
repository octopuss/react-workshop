import React, { PropTypes } from 'react';
import './textfield.scss';

const TextField = props => {
    const { label, onChange, value, disabled, ...otherProps } = props;
    return (
        <div className={disabled ? "TextField--disabled" : "TextField"}>
            {label ? <label className="TextField-label">{label}&nbsp;</label> : null}
            <input type="text" className="TextField-control" onChange={onChange} value={value} {...otherProps}/>
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

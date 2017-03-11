import React, { Component, PropTypes, Children } from 'react';
import './textfield.scss';

class TextField extends React.Component {
    render() {
        return (<div><input className="Textfield" type="text" value="hello"/></div>);
    }
}

export default TextField;

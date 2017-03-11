// IMPORTANT! babel-polyfill must be imported before anything else
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {TextField} from './components';

ReactDOM.render(
    <div>
        <TextField/>
    </div>, document.getElementById('app'), () => {
    }
);

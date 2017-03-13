import React, { Component } from 'react';
import { UserForm } from '../../components';
import { Form, Field } from 'react-redux-form';
import { connect } from 'react-redux';

import './app.scss';

const App = () => {
        return (
            <div>
                <h1>Hello Workshop</h1>
                <UserForm />
            </div>
        );
};

export default App;

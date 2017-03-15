import React from 'react';
import { UserForm, UserTable } from '../../components';
import { Router, Route, IndexRoute } from 'react-router';

import './app.scss';

const App = ({history}) =>
    <div>
        <h1><span>Hello Workshop</span></h1>
        <Router history={history}>
            <Route path="/" component={UserForm} />
            <Route path="/list" component={UserTable} />
        </Router>
    </div>;

export default App;

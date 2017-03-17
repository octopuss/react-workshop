import React from 'react';
import { UserForm, UserTable } from '../../components';
import { Router, Route, IndexRoute } from 'react-router';

import './app.scss';


const App = ({history}) =>
    <div className="App">
        <div className="App-header">
            <div className="App-header-image"><img src={require ('./cpas_logo.png')} /></div>
            <div className="App-header-text"><h1>React Workshop</h1></div>
        </div>
        <Router history={history}>
            <Route path="/" component={UserForm} />
            <Route path="/list" component={UserTable} />
        </Router>
    </div>;

export default App;

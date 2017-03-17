import { createStore, combineReducers, applyMiddleware } from 'redux';
import formDataReducer from './reducers/formDataReducer';
import usersReducer from './reducers/usersReducer';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';

const logger = createLogger();
const reduxRouterMiddleware = routerMiddleware(browserHistory);

const initialState = {
    formData : {
        name : "Ivan",
        email : "ivan@aa.aa"
    },
    users : [{id: Math.random(), name:"prvni", email: "mail@example.com"}]
};

const store = createStore(combineReducers({
    formData: formDataReducer,
    users: usersReducer,
    routing: routerReducer}), initialState, applyMiddleware(reduxRouterMiddleware, logger));

export default store;

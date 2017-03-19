import { createStore, combineReducers, applyMiddleware } from 'redux';
import formDataReducer from './reducers/formDataReducer';
import usersReducer from './reducers/usersReducer';
import createLogger from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';

const logger = createLogger();

const initialState = {
    formData : {
        name : "John Doe",
        email : "jd@example.com"
    },
};

const store = createStore(combineReducers({
    formData: formDataReducer}), initialState, applyMiddleware(logger));

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducers/userReducer';
import loggingReducer from './reducers/loggingReducer';
import createLogger from 'redux-logger';

const logger = createLogger();

const initialState = {
    formData : {
        name : "Ivan"
    }
};

const store = createStore(combineReducers({ formData: userReducer, loggingReducer }), initialState, applyMiddleware(logger));

export default store;

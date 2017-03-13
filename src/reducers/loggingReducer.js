import Actions from '../constants/ActionTypes';
import updeep from 'updeep';

const loggingReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ON_CHANGE_INPUT:
            const { field, value } = action.payload;
            console.log({field, value});
            return state;
        default:
            return state;
    }
};

export default loggingReducer;

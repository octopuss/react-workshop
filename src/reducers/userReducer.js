import Actions from '../constants/ActionTypes';
import updeep from 'updeep';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ON_CHANGE_INPUT:
            debugger;
            const { field, value } = action.payload;
            return updeep.updateIn(field, value, state);
        default:
            return state;
    }
};

export default userReducer;

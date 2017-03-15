import Actions from '../constants/ActionTypes';
import updeep from 'updeep';

const formDataReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.ON_CHANGE_INPUT:
            const { field, value } = action.payload;
            return updeep.updateIn(field, value, state);
        case Actions.FORM_SUBMITTED:
            return {'name': '', 'email': ''};
        default:
            return state;
    }
};

export default formDataReducer;

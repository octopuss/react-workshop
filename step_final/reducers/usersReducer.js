import Actions from '../constants/ActionTypes';
import updeep from 'updeep';

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.FORM_SUBMITTED: {
            const { user } = action.payload;
            let nUser = Object.assign({}, user, { id: Math.random() });
            return [].concat(state, nUser);
        }
        case Actions.ON_REMOVE: {
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        }
        case Actions.ON_ROW_INPUT_EDIT: {
            const { user } = action.payload;
            return updeep.map(u => {
                if (u.id === user.id) {
                    return user;
                } else {
                    return u;
                }
            }, state);
        }
        default:
            return state;
    }
};

export default usersReducer;

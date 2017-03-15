import Actions from '../constants/ActionTypes';

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.FORM_SUBMITTED:
            const { user } = action.payload;
            let nUser = Object.assign({}, user, {id: Math.random()});
            return [].concat(state, nUser);
        case Actions.ON_REMOVE:
            const {id} = action.payload;
            return state.filter(user => user.id!==id);
        default:
            return state;
    }
};

export default usersReducer;

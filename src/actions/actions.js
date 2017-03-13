import { createAction } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

const onChangeInput = createAction(ActionTypes.ON_CHANGE_INPUT, (field, value) => {
    return {
        field,
        value,
    };
});

export {onChangeInput};
export default {onChangeInput};

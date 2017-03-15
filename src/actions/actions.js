import { createAction } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

const onChangeInput = createAction(ActionTypes.ON_CHANGE_INPUT, (field, value) => ({field,value}));

const onSubmit = createAction(ActionTypes.FORM_SUBMITTED, user => ({user}));

const onRemove = createAction(ActionTypes.ON_REMOVE, id => ({id}));

export {onChangeInput};
export {onSubmit};
export {onRemove};
export default {onChangeInput, onSubmit, onRemove};

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import createTree from './createTree';
import getFieldValue from './getFieldValue';
import getSpouseState from './getSpouseState';

export default combineReducers({
    createTree,
    form:formReducer,
    fieldValue:getFieldValue,
    spouseState:getSpouseState
});
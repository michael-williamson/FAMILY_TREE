import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import createTree from './createTree';
import getFieldValue from './getFieldValue';
import getSpouseState from './getSpouseState';
import cancelIntro from './cancelIntro';

export default combineReducers({
    createTree,
    cancelIntro,
    form:formReducer,
    fieldValue:getFieldValue,
    spouseState:getSpouseState
});
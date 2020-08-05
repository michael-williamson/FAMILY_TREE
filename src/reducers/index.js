import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import createTree from './createTree';

export default combineReducers({
    form:formReducer,
    createTree
});
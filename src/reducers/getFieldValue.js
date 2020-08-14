import {GET_FIELD_VALUE} from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case GET_FIELD_VALUE:
            return [...action.payload];
        default:
            return state
    }
}

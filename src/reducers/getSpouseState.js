import {GET_SPOUSE_STATE} from '../actions/types';

export default (state=[],action) => {
    switch(action.type){
        case GET_SPOUSE_STATE:
            return [...action.payload];
        default:
            return state
    }
}
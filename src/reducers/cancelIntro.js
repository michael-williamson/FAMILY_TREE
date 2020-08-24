import {CANCEL_INTRO_ANIMATION} from '../actions/types';

export default (state = false, action) => {
    switch(action.type){
        case CANCEL_INTRO_ANIMATION:
            return action.payload;
        default:
            return state
    }
}
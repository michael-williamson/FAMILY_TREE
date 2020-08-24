import {CANCEL_INTRO_ANIMATION} from './types'

export const cancelIntroAnimation = () => {
    return {
        type:CANCEL_INTRO_ANIMATION,
        payload: true
    }
}



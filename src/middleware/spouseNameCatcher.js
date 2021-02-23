import { GET_SPOUSE_STATE } from "../actions/types";

export default function spouseNameCatcher({ dispatch, getState }) {
  return (next) => (action) => {
    if (action.type === "@@redux-form/UNREGISTER_FIELD") {
      if (action.payload.name.indexOf("isSpouse") > -1) {
        let state = getState();
        let { spouseState } = state;
        let prevStateIterator = () => {
          for (let i = 0; i < spouseState.length; i++) {
            if (spouseState[i].name === action.payload.name) {
              spouseState[i].bool = false;
              return spouseState;
            }
          }
          return spouseState;
        };

        let arr = prevStateIterator();

        dispatch({
          type: GET_SPOUSE_STATE,
          payload: arr,
        });
      }
    }

    next(action);
  };
}

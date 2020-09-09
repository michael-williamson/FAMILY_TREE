import { GET_SPOUSE_STATE } from "./types";

export const getSpouseState = (bool, name, prevState) => {
  function objConstructor(bool, name) {
    this.bool = bool;
    this.name = name;
  }

  let prevStateIterator = () => {
    for (let i = 0; i < prevState.length; i++) {
      if (prevState[i].name === name) {
        prevState[i].bool = bool;
        return prevState;
      }
    }
    prevState.push(new objConstructor(bool, name));
    return prevState;
  };

  let arr = prevStateIterator();
  return {
    type: GET_SPOUSE_STATE,
    payload: arr,
  };
};

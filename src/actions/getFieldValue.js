import {GET_FIELD_VALUE} from './types';

export const getFieldValue = (name,value,prevState) => {
    function objConstructor (name,value) {
        this.name = name;
        this.value = value; 
    }

    let prevStateIterator = () => {
        for(let i = 0; i < prevState.length; i++){
            if(prevState[i].name === name){
                prevState[i].value = value;
                return prevState; 
            }
        }
        prevState.push(new objConstructor(name,value));
        return prevState; 
    }

    let arr = prevStateIterator()

    return {
        type:GET_FIELD_VALUE,
        payload: arr
    }
}
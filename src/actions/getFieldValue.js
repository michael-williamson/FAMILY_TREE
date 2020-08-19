import {GET_FIELD_VALUE} from './types';

export const getFieldValue = (name,value,prevState) => {
    //takes params to compare current field with name and value of previous state,
    //either updates value for prevState that already exists or creates a new object
    //with current fields name and value,  fired from onChange event; 
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
import React,{useEffect} from 'react'

export function SelectInput(...props) {
    let {input,labelProps:{label,className},DemoBoxDownPointer,inputReduxProps} = props[0];

    //had to wire this special case in because when a field is moved or added to the array its takes the value of its
    //predecessor.  This case checks to see if the value stored in state is not equal to its current value and updates
    //with current value
    useEffect(()=>{
        for(let i = 0; i < inputReduxProps.spouseState.length; i++){
            if(input.name === inputReduxProps.spouseState[i].name){
                if(input.value !== inputReduxProps.spouseState[i].value){
                    inputReduxProps.getSpouseState(input.value,input.name,inputReduxProps.spouseState); 
                }
            }
        }
    })

    return (
        <div className="checkbox container">
            {DemoBoxDownPointer ? DemoBoxDownPointer : null}
            <div className={className}>{label}</div>
            <input {...input} type="checkbox" checked={input.value} />
        </div>
    );
}

   
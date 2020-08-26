import React,{Fragment,useEffect} from 'react'

export let Input = (...propsArr) => {
    let [props] = propsArr;
    let {input,assocArray,labelProps,type,meta:{touched,error},autofocus,placeholder,inputClass,inputReduxProps} = props;
    let {label,className} = labelProps;

    //had to wire this special case in because when a field is moved or added to the array its takes the value of its
    //predecessor.  This case checks to see if the value stored in state is not equal to its current value and updates
    //with current value
    useEffect(()=>{
    for(let i = 0; i < inputReduxProps.fieldValue.length; i++){
        if(assocArray === inputReduxProps.fieldValue[i].name){
            if(input.value !== inputReduxProps.fieldValue[i].value){
                inputReduxProps.getFieldValue(assocArray,input.value,inputReduxProps.fieldValue); 
            }
        }
    }})

    

    return (
        <Fragment>
        <div className={className}>{label}</div>
        <input 
            {...input} 
            className={inputClass || null} 
            type={type} 
            autoFocus={autofocus} 
            placeholder={placeholder?placeholder:null}/>
            {touched && ((error && <div className="ui left pointing red basic label">{error}</div>))}
        </Fragment>
    )
}
import React,{Fragment} from 'react'

export let Input = (...propsArr) => {
    let [props] = propsArr;
    let {input,labelProps,type,meta:{touched,error},autofocus,placeholder,inputClass} = props;
    let {label,className} = labelProps;

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
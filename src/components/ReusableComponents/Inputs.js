import React,{Fragment} from 'react'

export let Input = (...props) => {
    let {input,label:{label,className},type,meta:{touched,error},autofocus} = props[0];
    return (
        <Fragment>
        <div className={className}>{label}</div>
        <input {...input} type={type} autoFocus={autofocus}/>
        {touched && ((error && <span style={{color:'red'}}>{error}</span>))}
        </Fragment>
    )
}
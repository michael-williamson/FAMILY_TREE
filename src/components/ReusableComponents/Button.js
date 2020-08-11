import React from 'react'

export let Button = (...props) => {
    let {type,className,text,disabled,onClick} = props[0];
    return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>{text}</button>
    );
}
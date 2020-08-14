import React from 'react'

export function SelectInput(...props) {
    let {input,labelProps:{label,className}} = props[0]
    return (
        <div className="checkbox container">
            <div className={className}>{label}</div>
            <input {...input} type="checkbox" />
        </div>
    );
}

   
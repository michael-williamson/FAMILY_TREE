import React from 'react'

export function SelectInput(...props) {
    let {input,labelProps:{label,className},DemoBoxDownPointer} = props[0];
    return (
        <div className="checkbox container">
            {DemoBoxDownPointer ? DemoBoxDownPointer : null}
            <div className={className}>{label}</div>
            <input {...input} type="checkbox" />
        </div>
    );
}

   
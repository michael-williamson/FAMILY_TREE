import React from 'react'

export function SelectInput(...props) {
    console.log(props,"line 4 props")
    let {input,name,inputReduxProps:{getSpouseState}} = props[0]
    return (
        <div>
            <input {...input} type="checkbox" />
        </div>
    );
}

   
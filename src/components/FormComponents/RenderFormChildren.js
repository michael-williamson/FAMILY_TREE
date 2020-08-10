import React from 'react';
import {Field,FieldArray} from 'redux-form';
//components
import {Input} from '../ReusableComponents/Inputs';

function RenderFormChildren(props) {
    let {fields} = props; 
    let required = value => value ? undefined : 'Required';
    return (
        <div className="ui list" id="ul">
            {fields.map((child,index)=>{
               return ( <div className="item" id="item" key={child}>
                    <div className="inline field eight wide">
                    <Field 
                        name={`${child}field${index}`} 
                        component={(props)=><Input {...props}/>} 
                        label={{label:`Child ${index + 1}`,className:"ui purple horizontal label"}} 
                        validate={[required]}
                    />
                    <button type="button" className="ui red mini button" title="Remove Child Input" onClick={()=>fields.remove(index)}><i className="trash icon"></i></button>
                    </div>
                    <FieldArray 
                        name={`${child}arr${index}`} 
                        component={(props)=><RenderFormChildren {...props}/>}
                    /> 
                </div>);
            })}
             <button className="tiny ui button olive" type="button" onClick={()=>fields.push({})}>Add Child</button>
        </div>
    );
}

export default RenderFormChildren;
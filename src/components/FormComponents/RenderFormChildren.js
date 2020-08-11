import React from 'react';
import {Field,FieldArray} from 'redux-form';
//components
import {Input} from '../ReusableComponents/Inputs';

let RenderFormChildren = (props) => {
    let {fields,formData} = props; 
    let required = value => value ? undefined : 'Required';

    let addValidation = () => {
        if(!formData.valid || formData.pristine){
            return true
        }else{
            return false
        }
    }
    return (
        <div className="ui list" id="ul">
            {fields.map((child,index)=>{
               return ( <div className="item" id="item" key={child}>
                    <div className="inline field eight wide">
                    <Field 
                        name={`${child}field${index}`} 
                        component={Input} 
                        label={{label:`Child ${index + 1}`,className:"ui purple horizontal label"}} 
                        validate={[required]}
                        autofocus={true}
                    />
                    <button type="button" className="ui red mini button" title="Remove Child Input" onClick={()=>fields.remove(index)}>
                        <i className="trash icon"></i>
                    </button>
                    </div>
                    <FieldArray 
                        name={`${child}arr${index}`} 
                        component={RenderFormChildren}
                        formData={formData}
                    /> 
                </div>);
            })}
             <button className="tiny ui button olive" type="button" onClick={()=>fields.push({})} disabled={addValidation()}>Add Child</button>
        </div>
    );
}

export default RenderFormChildren;
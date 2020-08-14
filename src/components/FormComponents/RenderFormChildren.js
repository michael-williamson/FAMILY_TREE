import React from 'react';
import {Field,FieldArray} from 'redux-form';
//components
import {Input} from '../ReusableComponents/Inputs';
import {SelectInput} from '../ReusableComponents/SelectInput';

let RenderFormChildren = (props) => {
    let {fields,fieldArrayReduxProps} = props; 
    let required = value => value ? undefined : 'Required';

    let addValidation = () => {
        if(!fieldArrayReduxProps.valid || fieldArrayReduxProps.pristine){
            return true
        }else{
            return false
        }
    }

    let btnName = "Ancestor"
    for(let i = 0; i < fieldArrayReduxProps.fieldValue.length; i++){
        if(fields.name === fieldArrayReduxProps.fieldValue[i].name){
            btnName = fieldArrayReduxProps.fieldValue[i].value
        }
    }

    let spouseState = (searchName) => {
        for(let i = 0; i < fieldArrayReduxProps.spouseState.length; i++){
            if(searchName === fieldArrayReduxProps.spouseState[i].name){
                return fieldArrayReduxProps.spouseState[i].bool; 
            }
        }
        return false; 
    }

    return (
        <div className="ui list" id="ul">
            {fields.map((child,index)=>{
               return ( <div className="item" id="item" key={child}>
                    <div className="inline field ten wide">
                    <Field 
                        name={`${child}field${index}`} 
                        component={Input} 
                        labelProps={{label:`Child ${index + 1}`,className:"ui purple horizontal label"}} 
                        validate={[required]}
                        autofocus={true}
                        inputClass={""}
                        inputReduxProps={fieldArrayReduxProps}
                        //onBlur event to capture input value and pass it into redux and back down to add child button
                        //leaving in unused parameters for reference; hard coding "ancestorChildren" b/c FieldArrays
                        //within RenderFormChildren component will be assigned different names for each array but 
                        //this FieldArray had to be assigned manually b/c not in iteration; 
                        onBlur={(event, newValue, previousValue, name) => fieldArrayReduxProps.getFieldValue(`${child}arr${index}`,newValue,fieldArrayReduxProps.fieldValue)} 
                        //Giving the field an ID so that I can sync its value to parent array(or component) and its add child button       
                        ID={`${child}arr${index}`}
                    />
                    {spouseState(`${child}isSpouse`) &&
                    <Field 
                        name={`${child}field${index}spouse`} 
                        component={Input} 
                        labelProps={{label:`Spouse`,className:"ui purple horizontal label spouseLabel"}} 
                        inputReduxProps={fieldArrayReduxProps}
                        placeholder={"spouse"}
                    />}
                    <Field 
                    component={SelectInput} 
                    name={`${child}isSpouse`} 
                    labelProps={{label:`${spouseState(`${child}isSpouse`)?'Remove Spouse':'Add Spouse'}`,className:"ui basic mini label addSpouseLabel"}} 
                    inputReduxProps={fieldArrayReduxProps}
                    //anytime checkbox is selected onChange is called with values necessary to update state and use a boolean to determine
                    //whether to render spouse Field component; passing newValue, name of Field component, and prevState to compare and update
                    onChange={(event, newValue, previousValue, name)=>fieldArrayReduxProps.getSpouseState(newValue,name,fieldArrayReduxProps.spouseState)}
                    />
                    <button type="button" className="ui red mini button" title="Remove Child Input" onClick={()=>fields.remove(index)}>
                        <i className="trash icon"></i>
                    </button>
                    </div>
                    <FieldArray 
                        name={`${child}arr${index}`} 
                        component={RenderFormChildren}
                        fieldArrayReduxProps={fieldArrayReduxProps}
                    /> 
                </div>);
            })}
             <button className="tiny ui button olive" type="button" onClick={()=>fields.push({})} disabled={addValidation()}>
                {`Add Child to ${btnName}`}
             </button>
        </div>
    );
}

export default RenderFormChildren;
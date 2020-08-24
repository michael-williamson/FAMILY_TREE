import React from 'react';
import {Field,FieldArray} from 'redux-form';
//components
import {Input} from '../ReusableComponents/Inputs';
import {SelectInput} from '../ReusableComponents/SelectInput';

let RenderFormChildren = (props) => {
    //fields are associated with Field Array,  fieldArrayReduxProps
    //are just the main group of props being passed all the way down,
    //and required is the validate function passed down
    let {fields,fieldArrayReduxProps,required,maxLength,ID,ordinalNumerals} = props; 

    let regEx = /\[\d+\]/g;
    let bracketArr = fields.name.match(regEx);
    console.log(bracketArr)

    let addValidation = () => {
        if(!fieldArrayReduxProps.valid || fieldArrayReduxProps.pristine){
            return true
        }else{
            return false
        }
    }
    //button receives name associated with its parent array,  this is 
    //taken care of by the fieldValue state
    let btnName = ""
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
               return ( <div className="item" id="item" key={index}>
                    <div className="six wide mobile inline tablet field">
                    <Field 
                        name={`${child}field`} 
                        component={Input} 
                        labelProps={{label:`${fieldArrayReduxProps.ordinalNumerals(index + 1)} Child`,className:"ui purple horizontal label"}} 
                        validate={[required,maxLength(50)]}
                        autofocus={true}
                        inputClass={""}
                        inputReduxProps={fieldArrayReduxProps}
                        //onChange event to capture input value and pass it into redux and back down to add child button
                        onChange={(event, newValue, previousValue, name) => fieldArrayReduxProps.getFieldValue(`${child}arr`,newValue,fieldArrayReduxProps.fieldValue)} 
                        //Giving the field an ID so that I can sync its value to parent array(or component) and its add child button       
                        ID={`${child}arr${index}`}
                    />
                    {spouseState(`${child}isSpouse`) &&
                    <Field 
                        name={`${child}spouse`} 
                        validate={maxLength(50)}
                        component={Input} 
                        autofocus={true}
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
                    onChange={(event, newValue, previousValue, name)=>{
                        if(newValue === false){
                            fieldArrayReduxProps.clearFields(false,false,[`${child}field${index}spouse`]);
                        }
                        fieldArrayReduxProps.getSpouseState(newValue,name,fieldArrayReduxProps.spouseState)
                    }
                    }
                    />
                    <button type="button" className="ui red mini button" title="Remove Child Input" onClick={()=>fields.remove(index)}>
                        <i className="trash icon"></i>
                    </button>
                    </div>
                    {bracketArr?.length > 3 ? <div className="limitMessage">No more than 5 generations</div>: <FieldArray 
                                                                                                                    name={`${child}arr`} 
                                                                                                                    component={RenderFormChildren}
                                                                                                                    fieldArrayReduxProps={fieldArrayReduxProps}
                                                                                                                    required={required}
                                                                                                                    maxLength={maxLength}
                                                                                                                    ID={`${child}arr`}
                                                                                                                    />}
                </div>);
            })}
             <button 
             className="tiny ui button olive" 
             type="button" 
             onClick={()=>fields.push({})} 
             disabled={addValidation()} 
            >
             <i className="user plus icon"></i>
             { btnName ? `Add Child to ${btnName}` : `Add Child`}
             </button>
        </div>
    );
}

export default RenderFormChildren;
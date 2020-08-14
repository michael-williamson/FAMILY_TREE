import React, { Component} from 'react';
import {Field,FieldArray} from 'redux-form';
//components
import RenderFormChildren from './RenderFormChildren';
import {Button} from '../ReusableComponents/Button';
import {Input} from '../ReusableComponents/Inputs';
import {SelectInput} from '../ReusableComponents/SelectInput';
//css
import '../../styles/AncestorForm.css'
   
class AncestorForm extends Component {

    required = value => value ? undefined : 'Required';

    submitValidation = () => {
        if(!this.props.valid || this.props.pristine){
            return true
        }else{
            return false
        }
    }

    spouseState = (searchName) => {
        for(let i = 0; i < this.props.spouseState.length; i++){
            if(searchName === this.props.spouseState[i].name){
                return this.props.spouseState[i].bool; 
            }
        }
        return false; 
    }

    render() {
        return (
        <form className="ui form" onSubmit={this.props.handleSubmit(this.props.onSubmit)} autoComplete="off">
            <div className="inline field ten wide">
            <Field 
            //add character max to all inputs that way nobody can copy paste a shit ton of text as I just did accidentally
                name="ancestor" 
                component={Input} 
                labelProps={{label:"Ancestor",className:"ui purple horizontal label"}} 
                validate={[this.required]}
                type="text"
                autofocus={true}
                inputClass={""}
                //try destructuring this.props down to only necessary data
                inputReduxProps={this.props}
                //event to capture input value and pass it into redux and back down to add child button
                //leaving in unused parameters for reference; hard coding "ancestorChildren" b/c FieldArrays
                //within RenderFormChildren component will be assigned different names for each array but 
                //this FieldArray had to be assigned manually b/c not in iteration; 
                onBlur={(event, newValue, previousValue, name) => this.props.getFieldValue("ancestorChildren",newValue,this.props.fieldValue)}
                //Giving the field an ID so that I can sync its value with the add child button;  it doesn't really need an ID but all following
                //input fields will need them to link their value to parent array(or component) and its add child button
                ID={"ancestorChildren"}
            />
            {this.spouseState("isSpouse") &&
            <Field 
                //need to capitalize spouse
                name={`ancestorspouse`} 
                component={Input} 
                labelProps={{label:`Spouse`,className:"ui purple horizontal label spouseLabel"}} 
                inputReduxProps={this.props}
                placeholder={"spouse"}
            />}
            <Field 
                component={SelectInput}
                name="isSpouse" 
                labelProps={{label:`${this.spouseState("isSpouse")?'Remove Spouse':'Add Spouse'}`,className:"ui basic mini label addSpouseLabel"}} 
                inputReduxProps={this.props}
                //anytime checkbox is selected onChange is called with values necessary to update state and use a boolean to determine
                //whether to render spouse Field component
                onChange={(event, newValue, previousValue, name)=>this.props.getSpouseState(newValue,name,this.props.spouseState)}
            />
            </div>
            <FieldArray 
                name="ancestorChildren" 
                component={RenderFormChildren}
                fieldArrayReduxProps={this.props}
            /> 
            <Button className="ui button primary" disabled={this.submitValidation()} text={"Submit"}/>
            <Button className="negative ui button" onClick={this.props.reset} type={"reset"} text={"Clear"}/>
        </form>
        );
    }
}   


export default AncestorForm;
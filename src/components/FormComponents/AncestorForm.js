import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm, FieldArray} from 'redux-form';
//components
import RenderFormChildren from './RenderFormChildren';
import {Button} from '../ReusableComponents/Button';
import {Input} from '../ReusableComponents/Inputs';
//actions creators
import {createTree} from '../../actions/index';
//css
import '../../styles/AncestorForm.css'
   

class AncestorForm extends Component {

    onSubmit = (formValues) =>  {
        //taking registered fields to create a count of each generation for page size and misc....
        let fields = this.props.formData.enterAncestors.registeredFields; 
        this.props.createTree(formValues,fields)
    };

    required = value => value ? undefined : 'Required';

    submitValidation = () => {
        if(!this.props.valid || this.props.pristine){
            return true
        }else{
            return false
        }
    }

    render() {
        return (
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off">
            <div className="inline field six wide">
            <Field 
                name="ancestor" 
                component={Input} 
                label={{label:"Ancestor",className:"ui purple horizontal label"}} 
                validate={[this.required]}
                type="text"
                autofocus={true}
            />
            </div>
            <FieldArray 
                name="ancestorChildren" 
                component={RenderFormChildren}
                formData={this.props}
            /> 
            <Button className="ui button primary" disabled={this.submitValidation()} text={"Submit"}/>
            <Button className="negative ui button" onClick={this.props.reset} type={"reset"} text={"Clear"}/>
        </form>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        formData: state.form,
    }
} 

export default connect(mapStateToProps,{createTree})(reduxForm({form:'enterAncestors',destroyOnUnmount:false,updateUnregisteredFields:true})(AncestorForm));
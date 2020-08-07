import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm, FieldArray} from 'redux-form';
import {createTree} from '../actions/index';
import '../styles/AncestorForm.css';
   

class AncestorForm extends Component {

    onSubmit = (formValues) =>  {
        let fields = this.props.formData.enterAncestors.registeredFields; 
        this.props.createTree(formValues,fields)
    };


    required = value => value ? undefined : 'Required';

    submitValidation = () => {
        if(!this.props.valid || this.props.pristine){
            return true
        
        }else{return false}
    }

    inputRender = ({input,label,type,meta:{touched,error}}) => {
        return (
            <Fragment>
            <div className="ui purple horizontal label">{label}</div>
            <input {...input} type={type}/>
            {touched && ((error && <span style={{color:'red'}}>{error}</span>))}
            </Fragment>
        )
    }

    renderChildren = ({fields}) => { 
        return (
            <div className="ui list" id="ul">
                {fields.map((child,index)=>{
                   return ( <div className="item" id="item" key={child}>
                        <div className="inline field eight wide">
                        <Field name={`${child}field${index}`} component={this.inputRender} label={`Child ${index + 1}`} validate={[this.required]}/>
                        <button type="button" className="ui red mini button" title="Remove Child Input" onClick={()=>fields.remove(index)}><i className="trash icon"></i></button>
                        </div>
                        <FieldArray name={`${child}arr${index}`} component={this.renderChildren}/> 
                    </div>);
                })}
                 <button className="tiny ui button olive" type="button" onClick={()=>fields.push({})}>Add Child</button>
            </div>
        );

    }

    render() {
        // console.log("render is fired _______________>>>>")
        return (
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off">
            <div className="inline field six wide">
            <Field name="ancestor" component={this.inputRender} label="Ancestor" validate={[this.required]}/>
            </div>
            <FieldArray name="ancestorChildren" component={this.renderChildren}/> 
            <button className="ui button primary" disabled={this.submitValidation()}>Submit</button>
            <button className="negative ui button" onClick={this.props.reset} type="reset">Clear</button>
        </form>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        formData: state.form,
    }
} 

export default connect(mapStateToProps,{createTree})(reduxForm({form:'enterAncestors',destroyOnUnmount:false})(AncestorForm));
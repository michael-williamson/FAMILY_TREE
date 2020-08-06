import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm, FieldArray} from 'redux-form';
import {createTree} from '../actions/index';

import '../styles/AncestorForm.css';

class AncestorEnter extends Component {

    onSubmit = (formValues) =>  this.props.createTree(formValues);

    inputRender = ({input,label,type}) => {
        return (
            <Fragment>
            <div className="ui purple horizontal label">{label}</div>
            <input {...input} type={type}/>
            </Fragment>
        )
    }
    // addSpouse= (...props) => {
    //     console.log(props,"add spouse is fired +_________________")
    //     return <Field name="spouse" component={this.inputRender}/>
    // }

    renderChildren = ({fields}) => {   
        return (
            <div className="ui list" id="ul">
                {fields.map((child,index)=>{
                   return ( <div className="item" id="item">
                        <div className="inline field six wide">
                        <Field name={`${child}field${index}`} component={this.inputRender} label={`Child ${index + 1}`}/>
                        <button type="button" className="ui red mini button" title="Remove Child Input" onClick={()=>fields.remove(index)}><i class="trash icon"></i></button>
                        </div>
                        <FieldArray name={`${child}arr${index}`} component={this.renderChildren}/> 
                    </div>);
                })}
                 <button className="tiny ui button olive" type="button" title="Add Child" onClick={()=>fields.push({})}>Add Child</button>
            </div>
        );

    }

    render() {
        // console.log("render is fired _______________>>>>")
        return (
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="inline field six wide">
            <Field name="ancestor" component={this.inputRender} label="Ancestor"/>
            </div>
            <FieldArray name="ancestorChildren" component={this.renderChildren}/> 
            <button className="ui button primary">Submit</button>
        </form>
        );
    }
}

const mapStateToProps =  (state,ownProps) => {
    return {
        formData: state.form
    }
} 

export default connect(mapStateToProps,{createTree})(reduxForm({form:'enterAncestors'})(AncestorEnter));
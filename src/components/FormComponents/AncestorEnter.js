import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
//components
import AncestorForm from './AncestorForm';
//action creators
import {createTree} from '../../actions/index';
import {getFieldValue} from '../../actions/index';
import {getSpouseState} from '../../actions/index';
//css
import '../../styles/AncestorEnter.css';

class AncestorEnter extends Component {
    //holds state for AncestorForm,RenderFormChildren

    onSubmit = (formValues) =>  {
        //taking registered fields to create a count of each generation for page size and misc....
        let fields = this.props.formData.enterAncestors.registeredFields; 
        this.props.createTree(formValues,fields)
    };
  
    render() {
        return (
            <div className="ancestorEnter">
                <h1>Family Tree</h1>
                <AncestorForm {...this.props} onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        formData: state.form,
        fieldValue:state.fieldValue,
        spouseState:state.spouseState
    }
} 

export default connect(mapStateToProps,{createTree,getFieldValue,getSpouseState})(reduxForm({form:'enterAncestors',destroyOnUnmount:false})(AncestorEnter));
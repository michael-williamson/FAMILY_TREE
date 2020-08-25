import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
//components
import AncestorForm from './AncestorForm';  
import IconTree from './IconTree';
import {WelcomeMessage} from './helperComponents/WelcomeMessage.js'
//action creators
import {createTree} from '../../actions/index';
import {getFieldValue} from '../../actions/index';
import {getSpouseState} from '../../actions/index';
import {cancelIntroAnimation} from '../../actions/index'
//css
import '../../styles/FormComponents/AncestorEnter.css';

class AncestorEnter extends Component {
    //holds state for AncestorForm,RenderFormChildren

    componentDidMount(){
        if(window.sessionStorage.getItem("playAnimation")) this.props.cancelIntroAnimation(); 
    }

    onSubmit = (formValues) =>  {
        //taking registered fields to create a count of each generation for page size and misc....
        let fields = this.props.formData.enterAncestors.registeredFields; 
        this.props.createTree(formValues,fields)
    };

    //stop instructions on intro function
    stopInstructions = () => {
        window.sessionStorage.setItem("playAnimation","no")   
        this.props.cancelIntroAnimation(); 
    }

    ordinalNumerals = (n) => {
        let s = ["th", "st", "nd", "rd"];
        let v = n%100;
       return n + (s[(v-20)%10] || s[v] || s[0]);
      }
  
    render() {
        return (
            <div className="ancestorEnter">
                <div className="formHeader">
                    <h1>Family Tree</h1>       
                    <IconTree/>  
                </div>
                {this.props.cancelIntro ? null : <button 
                                                    type="button" 
                                                    className="ui button blue tiny basic" 
                                                    id="stopInstructionsBtn" 
                                                    onClick={this.stopInstructions}>Hide Instructions
                                                </button>}
                {this.props.cancelIntro ? null : <WelcomeMessage/>}
                <AncestorForm {...this.props} onSubmit={this.onSubmit} ordinalNumerals={this.ordinalNumerals}/>
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        cancelIntro: state.cancelIntro,
        formData: state.form,
        fieldValue:state.fieldValue,
        spouseState:state.spouseState
    }
} 

export default connect(mapStateToProps,{createTree,getFieldValue,getSpouseState,cancelIntroAnimation})(reduxForm({form:'enterAncestors',destroyOnUnmount:false})(AncestorEnter));
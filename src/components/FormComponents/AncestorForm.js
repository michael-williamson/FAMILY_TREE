import React, { Component } from "react";
import { Field, FieldArray } from "redux-form";
//components
import RenderFormChildren from "./RenderFormChildren";
import { Button } from "../ReusableComponents/Button";
import { Input } from "../ReusableComponents/Inputs";
import { SelectInput } from "../ReusableComponents/SelectInput";
import { DemoBoxLeftPointer } from "./helperComponents/DemoBoxLeftPointer";
import { DemoBoxDownPointer } from "./helperComponents/DemoBoxDownPointer";
//css
import "../../styles/FormComponents/AncestorForm.css";

class AncestorForm extends Component {
  //validate function has to be declared outside of render or else it will create
  //an infinite loop,  passed down through props to each component
  required = (value) => (value ? undefined : "Required");

  maxLength = (max) => (value) =>
    value && value.length > max
      ? `Must be ${max} characters or less`
      : undefined;
  maxLength50 = this.maxLength(50);

  submitValidation = () => {
    //form will display valid = true if all field level validators are satisfied
    if (!this.props.valid || this.props.pristine) {
      return true;
    } else {
      return false;
    }
  };

  spouseState = (searchName) => {
    for (let i = 0; i < this.props.spouseState.length; i++) {
      if (searchName === this.props.spouseState[i].name) {
        return this.props.spouseState[i].bool;
      }
    }
    return false;
  };

  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        autoComplete="off"
      >
        <div className="inline field" id="ancestorChildren">
          <Field
            name="ancestor"
            assocArray={"ancestorChildren"}
            component={Input}
            labelProps={{
              label: "Ancestor",
              className: "ui purple horizontal label",
            }}
            validate={[this.required, this.maxLength50]}
            type="text"
            autofocus={true}
            inputClass={""}
            //try destructuring this.props down to only necessary data
            inputReduxProps={this.props}
            //event to capture input value and pass it into redux and back down to add child button
            //leaving in unused parameters for reference; hard coding "ancestorChildren" b/c FieldArrays
            //within RenderFormChildren component will be assigned different names for each array but
            //this FieldArray had to be assigned manually b/c not in iteration;
            onChange={(event, newValue, previousValue, name) =>
              this.props.getFieldValue(
                "ancestorChildren",
                newValue,
                this.props.fieldValue
              )
            }
            //Giving the field an ID so that I can sync its value with the add child button;  it doesn't really need an ID but all following
            //input fields will need them to link their value to parent array(or component) and its add child button
          />
          {this.props.cancelIntro ? null : <DemoBoxLeftPointer />}
          {this.spouseState("isSpouse") && (
            <Field
              //need to capitalize spouse?
              name={`ancestorspouse`}
              validate={this.maxLength50}
              component={Input}
              autofocus={true}
              labelProps={{
                label: `Spouse`,
                className: "ui purple horizontal label spouseLabel",
              }}
              inputReduxProps={this.props}
              placeholder={"spouse"}
            />
          )}
          <Field
            component={SelectInput}
            name="isSpouse"
            labelProps={{
              label: `${
                this.spouseState("isSpouse") ? "Remove Spouse" : "Add Spouse"
              }`,
              className: "ui basic mini label addSpouseLabel",
            }}
            inputReduxProps={this.props}
            DemoBoxDownPointer={
              this.props.cancelIntro ? null : <DemoBoxDownPointer />
            }
            //anytime checkbox is selected onChange is called with values necessary to update state and use a boolean to determine
            //whether to render spouse Field component
            onChange={(event, newValue, previousValue, name) => {
              if (newValue === false) {
                this.props.clearFields(false, false, ["ancestorspouse"]);
              }
              this.props.getSpouseState(newValue, name, this.props.spouseState);
            }}
          />
        </div>
        <FieldArray
          name="ancestorChildren"
          component={RenderFormChildren}
          fieldArrayReduxProps={this.props}
          required={this.required}
          maxLength={this.maxLength50}
          ID={"ancestorChildren"}
        />
        <Button
          className="ui button primary"
          disabled={this.submitValidation()}
          text={"Submit"}
        />
        <Button
          className="negative ui button"
          onClick={this.props.reset}
          type={"reset"}
          text={"Clear"}
        />
      </form>
    );
  }
}

export default AncestorForm;

import React from "react";
//css
import "../../../styles/FormComponents/helperComponents/DemoBoxDownPointer.css";

export const DemoBoxDownPointer = () => {
  return (
    <div className="demoBoxDownPointer">
      <i
        className="hand point down outline big blue icon"
        id="pointDownHandDemoBox"
      ></i>
      <div className="downPointerMessage">
        Each field will have the option to add a Spouse if necessary
      </div>
    </div>
  );
};

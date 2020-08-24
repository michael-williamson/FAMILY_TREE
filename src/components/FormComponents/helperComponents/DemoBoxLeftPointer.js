import * as React from 'react';
//css
import '../../../styles/FormComponents/helperComponents/DemoBoxLeftPointer.css'

export const DemoBoxLeftPointer = () => {
    return (
        <div className="demoBoxLeftPointer">
            <i class="hand point left outline big blue icon" id="pointLeftHandDemoBox"></i>
            <div className="leftPointerMessage1">
                Start by entering the Ancestor of your Family Tree!
            </div>
            <div className="leftPointerMessage2">
                After you've entered your ancestor you may now add Children
            </div>
        </div>
    );
};
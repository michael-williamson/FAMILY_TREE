import React,{Fragment} from 'react';
//css
import '../../../styles/TreeComponents/helperComponents/ScrollMessage.css';
//media
import scrollRightGif from '../../../media/scroll_right.gif'

export const ScrollMessage = (props) => {


    const dontShowMessage = (e) => {
        window.sessionStorage.setItem("noShowMessage","hide");
        e.target.parentElement.style.animation = "none";
    }

    const pauseAnimationState = () => {
        if(window.sessionStorage.getItem('noShowMessage') === "hide") return "paused";
        else if(window.sessionStorage.getItem('noShowMessage') === "show") return "running"
    }

    return (
        <Fragment>
            <i className={`question circle icon`} id="questionCircleIcon"></i>
            <div className="overScrollMessageDiv" style={{animationPlayState:`${pauseAnimationState()}`}}>
                <i className={`close icon large`} onClick={dontShowMessage} title="don't show message again"></i>
                <div className={`overScrollMessage`}>
                    <div>
                        <h3>Notice:</h3>
                            <p>
                            Some children may appear off screen, You may use the scroll right function 
                            located at the bottom of the page to bring them in view
                            </p>
                        </div>
                        <img src={scrollRightGif} className="scrollRightGif" alt="page scrolling"/>
                    </div>
            </div>
        </Fragment>
    );
}

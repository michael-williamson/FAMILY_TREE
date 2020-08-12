import React, {Component} from 'react';
// import {connect} from 'react-redux';
import ChildrenNodes from './ChildrenNodes';
import '../../styles/TreeNode.css';

class TreeNode extends Component {

        render() {
            let {parentHeight,isAncestor,hasChildren,lastChild,pointerDiv,name,label,top} = this.props; 
            return ( 
                <div style={{height:`${parentHeight}px`}} className = {`${isAncestor ? isAncestor:""} ${hasChildren ? hasChildren: "noChildren"} parentToBorder ${lastChild? lastChild:""}`} >
                    <div className="borderDiv" style={{top:`${top}px`,height:`${parentHeight}px`}}>{pointerDiv?pointerDiv:""}</div>
                    <div className="labelNameDiv">
                        <div className="ui purple horizontal label">{label}</div>
                        <h2 className="ui blue header"> {name? name : "loading"}</h2> 
                    </div>
                    <div className="isChildren"> 
                    <ChildrenNodes {...this.props} parentHeight={parentHeight}/>
                    </div>
                </div >
            );
        }
 }

export default TreeNode;
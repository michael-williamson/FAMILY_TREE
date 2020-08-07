import React, {Component} from 'react';
// import {connect} from 'react-redux';
import ChildrenNodes from './ChildrenNodes';
import '../styles/TreeNode.css';

class TreeNode extends Component {

        render() {
            let {parentHeight,isAncestor,hasChildren,lastChild,pointerDiv,name,top} = this.props; 
            return ( 
                <div style={{height:`${parentHeight}px`}} className = {`${isAncestor ? isAncestor:""} ${hasChildren ? hasChildren: ""} parentToBorder ${lastChild? lastChild:""}`} >
                    <div className="borderDiv" style={{top:`${top}px`,height:`${parentHeight}px`}}>{pointerDiv?pointerDiv:""}</div>
                    <h5 className="blue"> {name? name : "loading"}</h5> 
                    <div className="isChildren"> 
                    <ChildrenNodes {...this.props} parentHeight={parentHeight}/>
                    </div>
                </div >
            );
        }
 }

export default TreeNode;
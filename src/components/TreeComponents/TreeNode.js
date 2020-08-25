import React, {Component} from 'react';
// import {connect} from 'react-redux';
import ChildrenNodes from './ChildrenNodes';
import '../../styles/TreeComponents/TreeNode.css';

class TreeNode extends Component {

        hideOrShowIsChildren = (e) => {
            let sibling = e.target.nextSibling;
            let siblingClassList = sibling.classList;
            siblingClassList.toggle("hide")

            let iconElement = e.target;
            let iconElementClassList = iconElement.classList;
            iconElementClassList.toggle("minus");
            iconElementClassList.toggle("plus");
        }

        render() {
            let {parentHeight,isAncestor,hasChildren,lastChild,borderDiv2,name,spouseName,label,noSiblings} = this.props; 
            return ( 
                <div 
                    style={{height:`${parentHeight}px`}} 
                    className = {`${isAncestor ? isAncestor:""} ${hasChildren ? hasChildren: "noChildren"} ${isAncestor ? "":"parentToBorder"} ${lastChild? lastChild:""} ${noSiblings}`} 
                >
                    <div className="borderDiv"></div>
                    {borderDiv2?borderDiv2:""}
                    <div className="labelNameDiv">
                        <div className="childLabelDiv">
                            <div className={`ui ${label.color} horizontal label`}>{label.name}</div>
                            <h4 className="ui blue header treeh4">{name? name : "loading"}</h4> 
                        </div>
                        {spouseName?  <div className="spouseLabelDiv">
                                        <div className="ui purple horizontal label">{label.spouseName}</div>
                                        <h4 className="ui blue header treeh4">{spouseName? spouseName : "loading"}</h4> 
                                    </div> : null}

                    </div>
                    {hasChildren? <div style={{position:'relative'}}>
                                    <i className="minus purple icon minimizer" onClick={this.hideOrShowIsChildren}></i>
                                    <div className="isChildren"> 
                                        {isAncestor?null:<div className="pointerDiv"></div>}
                                        <ChildrenNodes {...this.props}/>
                                    </div>
                                    </div>
                     :null}
                </div >
            );
        }
 }

export default TreeNode;
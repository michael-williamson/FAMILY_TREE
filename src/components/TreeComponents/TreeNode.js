import React, {Component} from 'react';
// import {connect} from 'react-redux';
import ChildrenNodes from './ChildrenNodes';
import '../../styles/TreeNode.css';

class TreeNode extends Component {

        render() {
            let {parentHeight,isAncestor,hasChildren,lastChild,borderDiv2,name,spouseName,label,top,noSiblings} = this.props; 
            return ( 
                <div 
                    style={{height:`${parentHeight}px`}} 
                    className = {`${isAncestor ? isAncestor:""} ${hasChildren ? hasChildren: "noChildren"} parentToBorder ${lastChild? lastChild:""} ${noSiblings}`} 
                >
                    <div className="borderDiv"></div>
                    {borderDiv2?borderDiv2:""}
                    <div className="labelNameDiv">
                        <div className="childLabelDiv">
                            <div className="ui purple horizontal label">{label.name}</div>
                            <h2 className="ui blue header">{name? name : "loading"}</h2> 
                        </div>
                        {spouseName?  <div className="spouseLabelDiv">
                                        <div className="ui purple horizontal label">{label.spouseName}</div>
                                        <h2 className="ui blue header">{spouseName? spouseName : "loading"}</h2> 
                                    </div> : null}

                    </div>
                    {hasChildren? <div className="isChildren"> 
                                    {isAncestor?null:<div className="pointerDiv"></div>}
                                    <ChildrenNodes {...this.props}/>
                                </div>
                     :null}
                </div >
            );
        }
 }

export default TreeNode;
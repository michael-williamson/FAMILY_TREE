import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/TreeNode.css';

class TreeNode extends Component {

    renderChildrenNodes = (parentHeight) => {
        if (this.props.children) {
            let lastChild = this.props.children[this.props.children.length - 1];
            let height = parentHeight/this.props.children.length;
            let top = height/2; 
            return this.props.children.map((child,i) => {
                if (!child.children) {
                    if(child.name === lastChild.name){
                        return <TreeNode name ={child.name} key={i} lastChild={"lastChild"} parentHeight={height} top={top}/>
                    }
                    return < TreeNode 
                        name = {child.name}
                        parentHeight={height}
                        top={top}
                        key={i}
                        />;
                    }
                    else if (child.children) {
                        if(child.name === lastChild.name){
                            return <TreeNode 
                            name ={child.name} 
                            key={i} lastChild={"lastChild"} 
                            parentHeight={height} 
                            top={top} 
                            children = {child.children} 
                            hasChildren = {"hasChildren"}
                            pointerDiv={<div className='borderDiv2'></div>}/>
                        }
                        return <TreeNode 
                            name = {child.name} 
                            key={i}
                            children = {child.children}
                            hasChildren = {"hasChildren"}
                            pointerDiv={<div className='borderDiv2'></div>}
                            parentHeight={height}
                            top={top}
                            />
                        } 
                    })
                }
            }

        render() {
            // console.log(this.props)
            let {parentHeight,isAncestor,hasChildren,lastChild,pointerDiv,name,top} = this.props; 
            return ( 
                <div style={{height:`${parentHeight}px`}} className = {`${isAncestor ? isAncestor:""} ${hasChildren ? hasChildren: ""} parentToBorder ${lastChild? lastChild:""}`} >
                    <div className="borderDiv" style={{top:`${top}px`,height:`${parentHeight}px`}}>{pointerDiv?pointerDiv:""}</div>
                    <h5> {name? name : "loading"}</h5> 
                    <div className="isChildren"> 
                    {this.renderChildrenNodes(parentHeight)} 
                    </div>
                </div >
            );
        }
 }

 const mapStateToProps = (state) => {
    return {
        children:state.createTree[0]?.children
    }
}

export default connect(mapStateToProps)(TreeNode);
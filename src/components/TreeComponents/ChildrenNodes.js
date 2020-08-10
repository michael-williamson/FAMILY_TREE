import React, { Component,Fragment } from 'react';
//components
import TreeNode from './TreeNode';

class ChildrenNodes extends Component {

    renderChildNodes(parentHeight){
        if (this.props.children) {
            let lastChild = this.props.children[this.props.children.length - 1];
            let height = parentHeight/this.props.children.length;
            height = height > 200 ? height : 200; 
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
                    }else if (child.children) {
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
                        return null; 
                    })
                }
    }

    render() {
        return (
            <Fragment>
                {this.renderChildNodes(this.props.parentHeight)}
            </Fragment>
        );
    }
}

export default ChildrenNodes;
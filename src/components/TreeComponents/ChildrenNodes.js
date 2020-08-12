import React, { Component,Fragment } from 'react';
//components
import TreeNode from './TreeNode';

class ChildrenNodes extends Component {

    renderChildNodes(parentHeight){
        if (this.props.children) {
            //setting index for each last children for border styling on last child
            let lastChild = this.props.children.length - 1;
            let height = parentHeight/this.props.children.length;
            height = height > 200 ? height : 200; 
            let top = height/2; 
            return this.props.children.map((child,i) => {
                if (!child.children) {
                    if(i === lastChild){
                        return <TreeNode name ={child.name} label={`child ${i + 1}`} key={i} lastChild={"lastChild"} parentHeight={height} top={top}/>
                    }
                    return < TreeNode 
                        name = {child.name}
                        label={`child ${i + 1}`}
                        parentHeight={height}
                        top={top}
                        key={i}
                        />;
                    }else if (child.children) {
                        if(i === lastChild){
                            return <TreeNode 
                            name ={child.name} 
                            label={`child ${i + 1}`}
                            key={i} 
                            lastChild={"lastChild"} 
                            parentHeight={height} 
                            top={top} 
                            children = {child.children} 
                            hasChildren = {"hasChildren"}
                            pointerDiv={<div className='borderDiv2'></div>}
                            />
                        }
                        return <TreeNode 
                            name = {child.name} 
                            label={`child ${i + 1}`}
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
import React, {
    Component
} from 'react';

import '../styles/TreeNode.css';

class TreeNode extends Component {

    renderChildrenNodes = (parentHeight) => {
        let len = this.props.children?.length -1; 
            if (this.props.children) {
                let lastChild = this.props.children[this.props.children.length - 1];
                let height = parentHeight/this.props.children.length;
                let top = height/2; 
                console.log(height)
                return this.props.children.map((child,i) => {
                        if (!child.children) {
                            if(child.data === lastChild.data){
                                return <TreeNode data ={child.data} key={i} lastChild={"lastChild"} parentHeight={height} top={top}/>
                            }
                            return ( < TreeNode data = {
                                    child.data
                                }
                                parentHeight={height}
                                top={top}
                                key={i}
                                />);
                            }
                            else if (child.children) {
                                console.log(i,len,child,"index and length")

                                return ( < TreeNode data = {
                                        child.data
                                    } key={i}
                                    children = {
                                        child.children
                                    }
                                    hasChildren = {
                                        "hasChildren"
                                    }
                                    pointerDiv={<div className='borderDiv2'></div>}
                                    parentHeight={height}
                                    top={top}
                                    />)}
                                
                            })
                    }
                }



                render() {
                    console.log(this.props)
                    let {parentHeight,isAncestor,hasChildren,lastChild,pointerDiv,data,top} = this.props; 
                    return ( 
                        <div style={{height:`${parentHeight}px`}} className = {
                            `${isAncestor ? isAncestor:""} ${hasChildren ? hasChildren: ""} parentToBorder ${lastChild? lastChild:""}`
                        } ><div className="borderDiv" style={{top:`${top}px`,height:`${parentHeight}px`}}>{pointerDiv?pointerDiv:""}</div>
                            <h5> {
                            data ? data : "loading"
                        }</h5> < div className="isChildren"> {
                            this.renderChildrenNodes(parentHeight)
                        } </div></div >
                    );
                }
            }

            export default TreeNode;
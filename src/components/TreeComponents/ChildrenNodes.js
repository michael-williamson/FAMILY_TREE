import React, { Component,Fragment } from 'react';
//components
import TreeNode from './TreeNode';

class ChildrenNodes extends Component {

     

    renderChildNodes(parentHeight,Arg){
        if (this.props.children) {
            //setting index for each last children for border styling on last child
            let firstChild = 0;
            let lastChild = this.props.children.length - 1;
            let noSiblings = this.props.children.length === 1 ? "noSiblings" : null; 
            let generation = this.props.children[0].generation; 
            let genPxObject = this.props.genPxObject; 
            let lastGeneration = this.props.genPxObject[this.props.genPxObject?.length - 1].generation
            // let lastChild = undefined;
            // let generation = 1;
            // let lastGeneration = 1; 
            // let height = parentHeight/this.props.children.length;
            // height = height > 200 ? height : 200; 
            // let top = height/2; 
            return this.props.children.map((child,i) => {
                if (!child.children) {
                        return <TreeNode 
                                    name={child.name} 
                                    spouseName={child.spouseName}
                                    label={{name:`Child ${i + 1}`,spouseName:"Spouse"}} 
                                    key={i} 
                                    //first child receives unique styling for brackets mainly
                                    firstChild={i === firstChild?"firstChild":null}
                                    //middle child receives unique styling for brackets mainly
                                    borderDiv2={i=== firstChild || i === lastChild? null:<div className='borderDiv2'></div>}
                                    //last child receives unique styling for brackets mainly
                                    lastChild={i=== lastChild?"lastChild":null} 
                                    noSiblings={noSiblings?"noSiblings":null}
                                    parentHeight={30} 
                                    // top={height/2}
                                    generation={generation}
                                    genPxObject={genPxObject}
                                    // percentage={`0.${generation + 2}`}
                                    // red={`${255 - (generation * 35)}`}
                                />
                    }else if (child.children) {
                            return  <TreeNode 
                                        name ={child.name} 
                                        spouseName={child.spouseName}
                                        label={{name:`child ${i + 1}`,spouseName:"Spouse"}}
                                        key={i} 
                                        //first child receives unique styling for brackets mainly
                                        firstChild={i === firstChild?"firstChild":null}
                                        //middle child receives unique styling for brackets mainly
                                        borderDiv2={i=== firstChild || i === lastChild? null:<div className='borderDiv2'></div>}
                                        //last child receives unique styling for brackets mainly
                                        lastChild={i=== lastChild?"lastChild":null} 
                                        noSiblings={noSiblings?"noSiblings":null}
                                        parentHeight={'auto'} 
                                        // top={child.pxCount/2} 
                                        children = {child.children} 
                                        hasChildren = {"hasChildren"}
                                        generation={generation}
                                        genPxObject={genPxObject}
                                        // percentage={`0.${generation + 2}`}
                                        // red={`${255 - (generation * 35)}`}
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
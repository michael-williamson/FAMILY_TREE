import React, { Component,Fragment } from 'react';
//components
import TreeNode from './TreeNode';

class ChildrenNodes extends Component {

    renderChildNodes(){
        if (this.props.children && this.props.children.length > 0) {
            //setting index for each last children for border styling on last child
            let firstChild = 0;
            let lastChild = this.props.children.length - 1;
            let noSiblings = this.props.children.length === 1 ? "noSiblings" : null; 
            let generation = this.props.children[0].generation; 
            let {colorArray,ordinalNumerals} = this.props; 

            return this.props.children.map((child,i) => {
                if (!child.children) {
                        return <TreeNode 
                                    name={child.name} 
                                    spouseName={child.spouseName}
                                    label={{name:`${ordinalNumerals(i + 1)} Child`,spouseName:"Spouse",color:`${colorArray[generation - 1]}`}} 
                                    key={i} 
                                    //first child receives unique styling for brackets mainly
                                    firstChild={i === firstChild?"firstChild":""}
                                    //middle child receives unique styling for brackets mainly
                                    borderDiv2={i=== firstChild || i === lastChild? null:<div className='borderDiv2'></div>}
                                    //last child receives unique styling for brackets mainly
                                    lastChild={i=== lastChild?"lastChild":""} 
                                    noSiblings={noSiblings?"noSiblings":""}
                                    parentHeight={30} 
                                    generation={generation}
                                    colorArray={colorArray}
                                    ordinalNumerals={ordinalNumerals}
                                />
                    }else if (child.children) {
                            return  <TreeNode 
                                        name ={child.name} 
                                        spouseName={child.spouseName}
                                        label={{name:`${ordinalNumerals(i + 1)} Child`,spouseName:"Spouse",color:`${colorArray[generation - 1]}`}}
                                        key={i} 
                                        //first child receives unique styling for brackets mainly
                                        firstChild={i === firstChild?"firstChild":""}
                                        //middle child receives unique styling for brackets mainly
                                        borderDiv2={i=== firstChild || i === lastChild? null:<div className='borderDiv2'></div>}
                                        //last child receives unique styling for brackets mainly
                                        lastChild={i=== lastChild?"lastChild":""} 
                                        noSiblings={noSiblings?"noSiblings":""}
                                        parentHeight={'auto'} 
                                        children = {child.children} 
                                        hasChildren = {"hasChildren"}
                                        generation={generation}
                                        colorArray={colorArray}
                                        ordinalNumerals={ordinalNumerals}
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
import React, { Component } from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';
//css
import '../../styles/TreeComponents/Tree.css';
//components
import TreeNode from './TreeNode';
import {TreeKey} from './helperComponents/TreeKey';
import {ScrollMessage} from './helperComponents/ScrollMessage';


class Tree extends Component {
    //passing down for label styling for each generation
    colorArray = ["orange","green","teal","violet","olive"];

    ordinalNumerals = (n) => {
        let s = ["th", "st", "nd", "rd"];
        let v = n%100;
       return n + (s[(v-20)%10] || s[v] || s[0]);
      }
      
    //stop instructions on intro function for FormEnter Component
    stopInstructions = () => {
        window.sessionStorage.setItem("playAnimation","no")   
    }

    render() {
        return (
            <div className="tree">
                <i className="play icon" id="playIcon" onClick={this.cancelSessionStorage}></i>
                <h1>Family Tree</h1>
                <ScrollMessage/> 
                <TreeKey colorArray={this.colorArray}/>
                <TreeNode 
                    name={this.props.ancestor} 
                    spouseName={this.props.spouseName} 
                    label={{name:"Ancestor",spouseName:"Spouse",color:"purple"}} 
                    isAncestor={"isAncestor"} 
                    noSiblings={"noSiblings"} 
                    hasChildren={"hasChildren"}
                    parentHeight={'auto'}
                    colorArray={this.colorArray} 
                    ordinalNumerals={this.ordinalNumerals}
                    {...this.props}
                />
                <Link type="button" className="ui blue mini button" to={`${process.env.PUBLIC_URL}/`} onClick={this.stopInstructions}><i className="arrow left icon"></i>Back to Form</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ancestor:state.createTree[0]?.ancestor,
        spouseName:state.createTree[0]?.spouseName,
        children:state.createTree[0]?.children,
        parentHeight:state.createTree[0]?.parentHeight,
        genPxObject:state.createTree[0]?.generationPxRelation
    }
}

export default connect(mapStateToProps)(Tree);
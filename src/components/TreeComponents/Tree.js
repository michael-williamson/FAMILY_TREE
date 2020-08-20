import React, { Component } from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';
//css
import '../../styles/Tree.css';
//components
import TreeNode from './TreeNode';

class Tree extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="tree">
                <h1>Family Tree</h1>
                <TreeNode 
                name={this.props.ancestor} 
                spouseName={this.props.spouseName} 
                label={{name:"Ancestor",spouseName:"Spouse"}} 
                isAncestor={"isAncestor"} 
                noSiblings={"noSiblings"} 
                hasChildren={"hasChildren"}
                parentHeight={'auto'} 
                {...this.props}/>
                <Link type="button" className="ui blue mini button" to="/"><i className="arrow left icon"></i></Link>
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
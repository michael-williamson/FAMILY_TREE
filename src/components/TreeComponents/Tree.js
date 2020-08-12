import React, { Component } from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';
//css
import '../../styles/Tree.css';
//components
import TreeNode from './TreeNode';

class Tree extends Component {

    render() {
        return (
            <div className="tree">
                <h1>Family Tree</h1>
                <TreeNode name={this.props.ancestor} label={"Ancestor"} isAncestor={"isAncestor"} parentHeight={this.props.parentHeight} top={0} {...this.props}/>
                <Link type="button" className="ui blue mini button" to="/"><i className="arrow left icon"></i></Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ancestor:state.createTree[0]?.ancestor,
        children:state.createTree[0]?.children,
        parentHeight:state.createTree[0]?.parentHeight
    }
}

export default connect(mapStateToProps)(Tree);
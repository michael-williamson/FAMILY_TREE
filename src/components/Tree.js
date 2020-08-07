import React, { Component } from 'react';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';

import '../styles/Tree.css';

import TreeNode from './TreeNode';

class Tree extends Component {


    render() {
        return (
            <div className="tree">
                <TreeNode name={this.props.ancestor} isAncestor={"isAncestor"} parentHeight={3000} top={0} {...this.props}/>
                <Link type="button" className="ui blue mini basic button" to="/"><i className="arrow left icon"></i></Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ancestor:state.createTree[0]?.ancestor,
        children:state.createTree[0]?.children
    }
}

export default connect(mapStateToProps)(Tree);
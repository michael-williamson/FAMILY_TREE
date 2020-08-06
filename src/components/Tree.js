import React, { Component } from 'react';
import {connect}from 'react-redux';

import TreeNode from './TreeNode';

class Tree extends Component {


    render() {
        return (
            <div>
                <TreeNode name={this.props.ancestor} isAncestor={"isAncestor"} parentHeight={900} top={0}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ancestor:state.createTree[0]?.ancestor
    }
}

export default connect(mapStateToProps)(Tree);
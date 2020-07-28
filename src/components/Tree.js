import React, { Component } from 'react';

import TreeNode from './TreeNode';

class Tree extends Component {


    render() {
        return (
            <div>
                <TreeNode data={"Grand Father"} children={[{data:"mark"},{data:"clark",children:[{data:"jerry"},{data:"bill"}]},{data:"richard"}]} isAncestor={"isAncestor"}/>
            </div>
        );
    }
}

export default Tree;
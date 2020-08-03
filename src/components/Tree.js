import React, { Component } from 'react';
import {data} from '../data/data'

import TreeNode from './TreeNode';

class Tree extends Component {


    render() {
        return (
            <div>
                <TreeNode data={"Grand Father"} children={data} isAncestor={"isAncestor"} parentHeight={900} top={0}/>
            </div>
        );
    }
}

export default Tree;
import React, {
    Component
} from 'react';

import '../styles/TreeNode.css';

class TreeNode extends Component {

    renderChildrenNodes = () => {
            if (this.props.children) {
                return this.props.children.map(child => {
                        if (!child.children) {
                            return ( < TreeNode data = {
                                    child.data
                                }
                                />);
                            }
                            else if (child.children) {
                                return ( < TreeNode data = {
                                        child.data
                                    }
                                    children = {
                                        child.children
                                    }
                                    hasChildren = {
                                        "hasChildren"
                                    }
                                    />)
                                }
                            })
                    }
                }



                render() {
                    return ( 
                        <div className = {
                            `${this.props.isAncestor ? this.props.isAncestor:""} ${this.props.hasChildren ? this.props.hasChildren: ""}`
                        } ><h1> {
                            this.props.data ? this.props.data : "loading"
                        }</h1> < div className="isChildren"> {
                            this.renderChildrenNodes()
                        } </div></div >
                    );
                }
            }

            export default TreeNode;
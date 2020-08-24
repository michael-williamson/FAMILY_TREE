import * as React from 'react';
//css
import '../../../styles/TreeComponents/helperComponents/TreeKey.css';

export const TreeKey = (props) => {
    return (
        <div className="treeKey">
        <div className="" id="keyHeader">
            <h2 className="ui header purple">Key</h2>
        </div>
        <div className="ui list">
        <div className="item">
            <div className="ui two column stackable padded grid" id="keyGenerationColors">
                <div className={`item eight wide column`} id="itemLabelMine">
                    <h4 className="ui blue header">
                        Generation Colors
                    </h4>
                </div>
                <div className="ui eight wide column stackable relaxed grid" id="colorSelectorMine">
                    <div className={`item ${props.colorArray[0]} column`}>
                    1st
                    </div>
                    <div className={`item ${props.colorArray[1]} column`}>
                    2nd
                    </div>
                    <div className={`item ${props.colorArray[2]} column`}>
                    3rd
                    </div>
                    <div className={`item ${props.colorArray[3]} column`}>
                    4th
                    </div>
                    <div className={`item ${props.colorArray[4]} column`}>
                    5th
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="item">
        2
        </div>
        <div className="item">
        3
        </div> */}
            <div className="ui two column stackable padded grid" id="keyMinimizer">
                <div className={`item eight wide column`} id="itemLabelMine">
                    <h4 className="ui blue header">
                        Show/Hide Children
                    </h4>
                </div>
                <div className={`item eight wide column`} id="minimizerIcons">
                {/* <div className="ui eight wide column stackable relaxed grid" id="colorSelectorMine"> */}
                    <div className={`item eight wide column`}>
                        <i class="plus purple icon"></i>
                    </div>
                    <div className={`item eight wide column`}>
                        <i class="minus purple icon"></i>
                    </div>
                {/* </div> */}
                </div>
            </div>
        </div>
    </div>
    );
};
import React from 'react';
import {Link} from 'react-router-dom';

export const NoMatch = () => {
    return (
        <div className="ui header" style={{padding:'70px',textAlign:'center'}}>
            <h1>This path is not defined</h1>
            <Link to={`${process.env.PUBLIC_URL}/`} className="ui button blue">Back to Main Page</Link>
        </div>
    );
};
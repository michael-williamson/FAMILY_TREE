import React, { Component } from 'react';
//components
import AncestorForm from './AncestorForm';
//css
import '../../styles/AncestorEnter.css';

class AncestorEnter extends Component {
    render() {
        return (
            <div>
                <h1>Family Tree</h1>
                <AncestorForm/>
            </div>
        );
    }
}

export default AncestorEnter;
import React, { Component } from 'react';

import AncestorForm from './AncestorForm';
import '../styles/AncestorEnter.css';

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
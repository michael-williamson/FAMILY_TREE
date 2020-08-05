import React from 'react';
import './App.css';

import Tree from './components/Tree';
import AncestorEnter from './components/AncestorEnter';

function App() {
  return (
    <div className="App">
      <Tree/>
      <AncestorEnter/>
    </div>
  );
}

export default App;

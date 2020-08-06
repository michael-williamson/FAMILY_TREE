import React from 'react';
import './App.css';

import {Router,Route} from 'react-router-dom';
import history from './history';

import Tree from './components/Tree';
import AncestorEnter from './components/AncestorEnter';

function App() {
  return (
    <div className="App">
      <Router history={history}>
      <Route exact path="/" component={AncestorEnter}/>
        <Route exact path="/tree" component={Tree}/>
      </Router>
    </div>
  );
}

export default App;

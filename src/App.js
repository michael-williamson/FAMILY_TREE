import React from 'react';
import './App.css';

import {Router,Route} from 'react-router-dom';
import history from './history';

import Tree from './components/TreeComponents/Tree';
import AncestorEnter from './components/FormComponents/AncestorEnter';

function App() {
  return (
    <div className="App">
      <Router history={history} basename={`${process.env.PUBLIC_URL}/`}>
        <Route exact path={`${process.env.PUBLIC_URL}/`} render={(routeProps)=><AncestorEnter {...routeProps}/>}/>
        <Route exact path={`${process.env.PUBLIC_URL}/tree`} render={()=><Tree/>}/>
      </Router>
    </div>
  );
}

export default App;

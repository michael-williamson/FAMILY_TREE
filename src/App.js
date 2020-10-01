import React from "react";
import "./App.css";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Tree from "./components/TreeComponents/Tree";
import AncestorEnter from "./components/FormComponents/AncestorEnter";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Router history={history} basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            render={(routeProps) => <AncestorEnter {...routeProps} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tree`}
            render={() => <Tree />}
          />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

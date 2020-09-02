import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
//spouseNameCatcher catches an action from redux form when a field is removed from array and
//gives the value false for spouseState so that the field corresponds with click the checkbox
import spouseNameCatcher from "../src/middleware/spouseNameCatcher";
import reducers from "../src/reducers/index";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk, spouseNameCatcher))
);

export default (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

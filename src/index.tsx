import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";

import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

const store = createStore(
  rootReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

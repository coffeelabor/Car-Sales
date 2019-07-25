import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { carReducer } from "./store/reducers";
import { store } from "./store";

import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

// const store = createStore(carReducer);
const AppWithProvider = (
  <Provider>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

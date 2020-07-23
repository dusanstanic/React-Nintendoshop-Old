import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, RouteComponentProps } from "react-router-dom";

import Header from "./Components/Header/Header";
import * as serviceWorker from "./serviceWorker";

interface Props extends RouteComponentProps<{}> {}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

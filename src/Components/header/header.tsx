import React from "react";
import "./Header.css";

import { Route } from "react-router-dom";

import App from "../../Containers/App";
import Home from "../Home/Home";
import Aux from "../../hoc/Auxiliary";

const Header = () => {
  return (
    <Aux>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#">Games</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      {/* <Route path="/" exact render={() => <h1>Hello</h1>} />
      <Route path="/" exact render={() => <h1>Hello</h1>} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/games" exact component={App} />
    </Aux>
  );
};

export default Header;

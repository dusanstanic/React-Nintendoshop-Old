import React from "react";
import "./Header.css";

import { Route, NavLink, Switch } from "react-router-dom";

import App from "../../Containers/App";
import Home from "../../Containers/Home/Home";
import Aux from "../../hoc/Auxiliary";

const Header = () => {
  return (
    <Aux>
      <div className="topnav">
        <NavLink
          className="nav-item"
          to="/"
          activeClassName="nav-item-active"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="nav-item-active"
          to={{ pathname: "/games", hash: "#submit", search: "?name=true" }}
          exact
        >
          Games
        </NavLink>
        <NavLink
          className="nav-item"
          activeClassName="nav-item-active"
          to={{
            pathname: "/games/gameDetails",
            hash: "#submit",
            search: "?name=true",
          }}
          exact
        >
          Games
        </NavLink>
      </div>
      {/* <Route path="/" exact render={() => <h1>Hello</h1>} />
      <Route path="/" exact render={() => <h1>Hello</h1>} /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/games" component={App} />
      </Switch>
    </Aux>
  );
};

export default Header;

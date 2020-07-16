import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { GameM } from "./models/GameM";

import Games from "./Components/Games/Games";

class App extends Component {
  state: { games: GameM[] } = {
    games: [
      {
        id: 1,
        title: "Luigi's Mansion 3",
        description: "description",
        releaseDate: new Date(2017, 8, 2),
        price: 8000,
        pgRating: "E",
        image: "",
        genreId: 1,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to Nintendo Shop</h1>
        <Games games={this.state.games} />
      </div>
    );
  }
}

export default App;

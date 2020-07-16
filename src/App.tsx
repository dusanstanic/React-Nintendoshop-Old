import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { GameM } from "./models/GameM";

class App extends Component {
  state: { games: GameM[] } = {
    games: [
      {
        id: 1,
        title: "Luigi's Mansion 3",
        description: "description",
        releaseDate: new Date(2017, 11, 2),
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
      </div>
    );
  }
}

export default App;

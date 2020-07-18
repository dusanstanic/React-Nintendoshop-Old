import React, { Component } from "react";
import "./App.css";
import { getGames } from "../Service/GameService";
import { GameM } from "../models/GameM";

import Games from "../Components/Games/Games";

class App extends Component {
  state: { games: GameM[] } = {
    games: [
      {
        id: 1,
        title: "Luigi's Mansion 3",
        description: "description",
        releaseDate: new Date(),
        price: 8000,
        pgRating: "E",
        image: "",
        genre: { id: 1, type: "Platform" },
      },
    ],
  };

  componentDidMount() {
    getGames().then((games) => {
      this.setState({ games });
    });
  }

  render() {
    return (
      <div className="App">
        <Games games={this.state.games} />
      </div>
    );
  }
}

export default App;

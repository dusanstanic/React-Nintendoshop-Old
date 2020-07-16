import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import { GameM } from "./models/GameM";

import Games from "./Components/Games/Games";

class App extends Component {
  parseDate = (date: Date) => {
    const dateArray = date.toString().split("-");
    const year = +dateArray[0];
    const month = +dateArray[1];
    const day = +dateArray[2];
    return new Date(year, month, day);
  };

  componentDidMount() {
    axios
      .get<GameM[]>("http://localhost:8080/games")
      .then((response) => {
        return response.data;
      })
      .then((games) => {
        const gamesUpdatedDate: GameM[] = games.map((game) => {
          console.log(game);
          return {
            ...game,
            releaseDate: this.parseDate(game.releaseDate),
          };
        });
        this.parseDate(games[0].releaseDate);
        this.setState({ games: gamesUpdatedDate });
      });
  }

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

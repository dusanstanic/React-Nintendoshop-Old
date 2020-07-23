import React, { Component } from "react";
import "./App.css";
import { getGames } from "../Service/GameService";
import { GameM } from "../models/GameM";

import Games from "./Games/Games";

import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}
interface State {
  games: GameM[];
}

class App extends Component<Props, State> {
  state = {
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
    console.log(this.props);
    return (
      <div className="App">
        <Games {...this.props} games={this.state.games} />
      </div>
    );
  }
}

export default App;

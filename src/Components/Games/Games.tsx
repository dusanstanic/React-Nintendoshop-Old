import React from "react";
import "./Games.css";
import { Route, RouteComponentProps } from "react-router-dom";

import { GameM } from "../../models/GameM";

import Game from "./Game/Game";
import GameDetails from "./GameDetails/GameDetails";

interface Props extends RouteComponentProps<{}>, Games {}

interface Games {
  games: GameM[];
}

const Games = (props: Props) => {
  const getGameDetailsHandler = (id: number) => {
    console.log(id);
    props.history.push({
      pathname: "/games/" + id,
    });
  };

  const games = props.games;
  /// console.log(props);
    <div>
      <h1>Games</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Release Date</th>
            <th>Price</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => {
            return (
              <Game
                key={index}
                game={game}
                {...props}
                getGameDetails={getGameDetailsHandler}
              />
            );
          })}
        </tbody>
      </table>
      <div>
        <Route path="/games/:id" component={GameDetails} />
      </div>
    </div>
  );
};

export default Games;

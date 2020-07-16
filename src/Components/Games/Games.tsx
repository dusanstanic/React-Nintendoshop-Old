import React from "react";

import { GameM } from "../../models/GameM";

import Game from "./Game/Game";

interface Props {
  games: GameM[];
}

const Games = (props: Props) => {
  const games = props.games;
  return (
    <div>
      <h1>Games</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Release Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => {
            return <Game key={index} game={game} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Games;

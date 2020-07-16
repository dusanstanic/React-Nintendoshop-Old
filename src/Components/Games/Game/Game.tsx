import React from "react";

import { GameM } from "../../../models/GameM";

interface Props {
  game: GameM;
}

const Game = (props: Props) => {
  const date = props.game.releaseDate;

  const formatDate = (): string => {
    let formattedDate: string = date.getFullYear().toString();

    if (date.getMonth() < 10) {
      formattedDate += "-0" + date.getMonth();
    } else {
      formattedDate += "-" + date.getMonth().toString();
    }

    if (date.getDay() < 10) {
      formattedDate += "-0" + date.getDay();
    } else {
      formattedDate += "-" + date.getDay();
    }

    return formattedDate;
  };

  return (
    <tr>
      <td>{props.game.title}</td>
      <td>{props.game.description}</td>
      <td>{formatDate()}</td>
      <td>{props.game.price}</td>
    </tr>
  );
};

export default Game;

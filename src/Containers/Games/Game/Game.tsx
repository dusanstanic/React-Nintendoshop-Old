import React from "react";
import "./Game.css";

import { GameM } from "../../../models/GameM";

import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}>, Game {}

interface Game {
  game: GameM;
  getGameDetails: Function;
}

const Game = (props: Props) => {
  console.log(props);
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
  /*
  const getGameDetailsHandler = () => {
    props.history.push({ pathname: props.match.url + "/gamesDetails" });
  };
  */
  return (
    <tr onClick={() => props.getGameDetails(props.game.id)}>
      <td>{props.game.title}</td>
      <td>{props.game.description}</td>
      <td>{formatDate()}</td>
      <td>{props.game.price}</td>
      <td>{props.game.genre.type}</td>
    </tr>
  );
};

export default Game;

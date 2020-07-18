import axios from "axios";

import { GameM } from "../models/GameM";

function parseDate(date: Date) {
  const dateArray = date.toString().split("-");
  const year = +dateArray[0];
  const month = +dateArray[1];
  const day = +dateArray[2];
  return new Date(year, month, day);
}

export function getGames(): Promise<GameM[]> {
  return axios
    .get<GameM[]>("http://localhost:8080/games")
    .then((response) => {
      return response.data;
    })
    .then((games) => {
      const gamesUpdatedDate: GameM[] = games.map((game) => {
        // console.log(game);
        return {
          ...game,
          releaseDate: parseDate(game.releaseDate),
        };
      });
      parseDate(games[0].releaseDate);
      return gamesUpdatedDate;
    });
}

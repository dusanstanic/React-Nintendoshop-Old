import { GenreM } from "./GenreM";

export interface GameM {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  price: number;
  pgRating: string;
  image: string;
  genre: GenreM;
}

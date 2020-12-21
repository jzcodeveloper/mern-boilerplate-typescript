import { Action } from "redux";

export interface MovieState {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string | string[];
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}

export interface MoviesByGenre {
  genre: string;
  movies: MovieState[];
}

export interface MoviesState {
  movies: MovieState[];
}

export interface RootState {
  movie: MovieState;
  movies: MoviesState;
}

export interface RootAction<T = string, P = any> extends Action {
  type: T;
  payload: P;
}

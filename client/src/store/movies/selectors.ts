import {
  RootState,
  MovieState,
  MoviesByGenre,
} from "../../@types/wookie-movies";
import { Selector } from "react-redux";
import { createSelector, OutputSelector } from "reselect";
import { getMoviesByGenre } from "./utils";

const selectMoviesState: Selector<RootState, MovieState[]> = (
  state: RootState
): MovieState[] => state.movies.movies;

export const selectMovies: OutputSelector<
  RootState,
  MovieState[],
  (movies: MovieState[]) => MovieState[]
> = createSelector<RootState, MovieState[], MovieState[]>(
  [selectMoviesState],
  (movies: MovieState[]): MovieState[] => movies
);

export const selectMoviesByGenre: OutputSelector<
  RootState,
  MoviesByGenre[],
  (movies: MovieState[]) => MoviesByGenre[]
> = createSelector<RootState, MovieState[], MoviesByGenre[]>(
  [selectMovies],
  (movies: MovieState[]): MoviesByGenre[] => getMoviesByGenre(movies)
);

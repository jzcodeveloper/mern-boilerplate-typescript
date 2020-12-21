import { RootState, MovieState } from "../../@types/wookie-movies";
import { Selector } from "react-redux";
import { createSelector, OutputSelector } from "reselect";

const selectMovieState: Selector<RootState, MovieState> = (
  state: RootState
): MovieState => state.movie;

export const selectMovie: OutputSelector<
  RootState,
  MovieState,
  (movie: MovieState) => MovieState
> = createSelector<RootState, MovieState, MovieState>(
  [selectMovieState],
  (movie: MovieState): MovieState => movie
);

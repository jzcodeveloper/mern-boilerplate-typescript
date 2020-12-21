import { MoviesState, RootAction } from "../../@types/wookie-movies";
import { Reducer } from "redux";
import { FETCH_MOVIES_SUCCESS, SEARCH_MOVIES_SUCCESS } from "./types";

export const moviesState: MoviesState = {
  movies: [],
};

export const moviesReducer: Reducer<MoviesState, RootAction> = (
  state: MoviesState = moviesState,
  action: RootAction
): MoviesState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: payload,
      };
    }

    default:
      return state;
  }
};

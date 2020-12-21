import { MovieState, RootAction } from "../../@types/wookie-movies";
import { Reducer } from "redux";
import { FETCH_MOVIE_SUCCESS } from "./types";

export const movieState: MovieState = {
  backdrop: "",
  cast: [],
  classification: "",
  director: "",
  genres: [],
  id: "",
  imdb_rating: 0,
  length: "",
  overview: "",
  poster: "",
  released_on: "",
  slug: "",
  title: "",
};

export const movieReducer: Reducer<MovieState, RootAction> = (
  state: MovieState = movieState,
  action: RootAction
): MovieState => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIE_SUCCESS: {
      return {
        ...state,
        ...payload,
      };
    }

    default:
      return state;
  }
};

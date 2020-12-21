import { RootAction, MovieState } from "../../@types/wookie-movies";
import { call, put, select } from "redux-saga/effects";

import { movieApi } from "./api";
import { selectMovies } from "../movies/selectors";
import * as actions from "./actions";

export function* fetchMovieWorker(action: actions.FetchMovieRequest) {
  try {
    const { payload } = action;
    // Check movies first
    const movies = yield select(selectMovies);
    const found = movies.find((movie: MovieState) => movie.slug === payload);
    // If found movie, don't make request
    if (found) {
      yield put(actions.fetchMovieSuccess(found));
    } else {
      const movie = yield call([movieApi, "fetchMovie"], payload);
      yield put(actions.fetchMovieSuccess(movie));
    }
  } catch (error) {
    yield put(actions.fetchMovieFailure(error));
  }
}

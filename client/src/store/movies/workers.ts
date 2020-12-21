import { RootAction } from "../../@types/wookie-movies";
import { call, put, select } from "redux-saga/effects";

import { moviesApi } from "./api";
import { selectMovies } from "./selectors";
import * as actions from "./actions";

export function* fetchMoviesWorker(action: actions.FetchMoviesRequest) {
  try {
    // Check movies first
    const movies = yield select(selectMovies);
    // If no movies, make request
    if (movies.length === 0) {
      const movies = yield call([moviesApi, "fetchMovies"]);
      yield put(actions.fetchMoviesSuccess(movies));
    } else {
      yield put(actions.fetchMoviesSuccess(movies));
    }
  } catch (error) {
    yield put(actions.fetchMoviesFailure(error));
  }
}

export function* searchMoviesWorker(action: actions.SearchMoviesRequest) {
  try {
    const { payload } = action;
    const movies = yield call([moviesApi, "searchMovies"], payload);
    yield put(actions.searchMoviesSuccess(movies));
  } catch (error) {
    yield put(actions.searchMoviesFailure(error));
  }
}

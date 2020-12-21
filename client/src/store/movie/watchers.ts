import { fork, takeLatest, ForkEffect } from "redux-saga/effects";
import { FETCH_MOVIE_REQUEST } from "./types";
import { fetchMovieWorker } from "./workers";

// Watchers
function* fetchMovieWatcher() {
  yield takeLatest(FETCH_MOVIE_REQUEST, fetchMovieWorker);
}

export const movieWatchers: ForkEffect[] = [fork(fetchMovieWatcher)];

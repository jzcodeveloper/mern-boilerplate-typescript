import { fork, takeLatest, ForkEffect } from "redux-saga/effects";
import { FETCH_MOVIES_REQUEST, SEARCH_MOVIES_REQUEST } from "./types";
import { fetchMoviesWorker, searchMoviesWorker } from "./workers";

// Watchers
function* fetchMoviesWatcher() {
  yield takeLatest(FETCH_MOVIES_REQUEST, fetchMoviesWorker);
}

function* searchMoviesWatcher() {
  yield takeLatest(SEARCH_MOVIES_REQUEST, searchMoviesWorker);
}

export const moviesWatchers: ForkEffect[] = [
  fork(fetchMoviesWatcher),
  fork(searchMoviesWatcher),
];

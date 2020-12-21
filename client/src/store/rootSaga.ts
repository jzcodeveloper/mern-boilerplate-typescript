import { all } from "redux-saga/effects";
import { movieWatchers } from "./movie/watchers";
import { moviesWatchers } from "./movies/watchers";

export function* rootSaga() {
  yield all([...movieWatchers, ...moviesWatchers]);
}

import { combineReducers } from "redux";
import { movieReducer } from "./movie/reducer";
import { moviesReducer } from "./movies/reducer";

export const rootReducer = combineReducers({
  movie: movieReducer,
  movies: moviesReducer,
});

import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { RootState } from "../@types/wookie-movies";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { movieState } from "./movie/reducer";
import { moviesState } from "./movies/reducer";

export const initialState: RootState = {
  movie: movieState,
  movies: moviesState,
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

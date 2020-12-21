import { RootAction, MovieState } from "../../@types/wookie-movies";
import { AxiosError } from "axios";
import {
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./types";

//
export function fetchMovieRequest(
  query: string
): RootAction<FETCH_MOVIE_REQUEST, string> {
  return {
    type: FETCH_MOVIE_REQUEST,
    payload: query,
  };
}
export type FetchMovieRequest = typeof fetchMovieRequest;

//
export function fetchMovieSuccess(
  movie: MovieState
): RootAction<FETCH_MOVIE_SUCCESS, MovieState> {
  return {
    type: FETCH_MOVIE_SUCCESS,
    payload: movie,
  };
}
export type FetchMovieSuccess = typeof fetchMovieSuccess;

//
export function fetchMovieFailure(
  error: AxiosError
): RootAction<FETCH_MOVIE_FAILURE, AxiosError> {
  return {
    type: FETCH_MOVIE_FAILURE,
    payload: error,
  };
}
export type FetchMovieFailure = typeof fetchMovieFailure;

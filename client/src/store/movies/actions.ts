import { Action } from "redux";
import { RootAction, MovieState } from "../../@types/wookie-movies";
import { AxiosError } from "axios";
import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
} from "./types";

//
export function fetchMoviesRequest(): Action<FETCH_MOVIES_REQUEST> {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
}
export type FetchMoviesRequest = typeof fetchMoviesRequest;

//
export function fetchMoviesSuccess(
  movies: MovieState[]
): RootAction<FETCH_MOVIES_SUCCESS, MovieState[]> {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
}
export type FetchMoviesSuccess = typeof fetchMoviesSuccess;

//
export function fetchMoviesFailure(
  error: AxiosError
): RootAction<FETCH_MOVIES_FAILURE, AxiosError> {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
}
export type FetchMoviesFailure = typeof fetchMoviesFailure;

//
export function searchMoviesRequest(
  query: string
): RootAction<SEARCH_MOVIES_REQUEST, string> {
  return {
    type: SEARCH_MOVIES_REQUEST,
    payload: query,
  };
}
export type SearchMoviesRequest = typeof searchMoviesRequest;

//
export function searchMoviesSuccess(
  movies: MovieState[]
): RootAction<SEARCH_MOVIES_SUCCESS> {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload: movies,
  };
}
export type SearchMoviesSuccess = typeof searchMoviesSuccess;

//
export function searchMoviesFailure(
  error: AxiosError
): RootAction<SEARCH_MOVIES_FAILURE, AxiosError> {
  return {
    type: SEARCH_MOVIES_FAILURE,
    payload: error,
  };
}
export type SearchMoviesFailure = typeof searchMoviesFailure;

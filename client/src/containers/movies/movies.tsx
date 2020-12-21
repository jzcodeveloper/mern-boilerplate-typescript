import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { RootState, MoviesByGenre } from "../../@types/wookie-movies";
import { selectMoviesByGenre } from "../../store/movies/selectors";
import { searchMoviesRequest } from "../../store/movies/actions";

import { Movies } from "../../components/movies";

export function MoviesContainer(): React.ReactElement {
  const dispatch = useDispatch();
  const location = useLocation();
  const movies = useSelector<RootState, MoviesByGenre[]>(selectMoviesByGenre);

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const query = search.get("q") || "";
    dispatch(searchMoviesRequest(query));
  }, [dispatch, location.search]);

  return <Movies movies={movies} />;
}

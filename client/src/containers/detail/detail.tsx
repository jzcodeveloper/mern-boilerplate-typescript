import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState, MovieState } from "../../@types/wookie-movies";
import { selectMovie } from "../../store/movie/selectors";
import { fetchMovieRequest } from "../../store/movie/actions";

import { Detail } from "../../components/detail";

interface Params {
  slug: string;
}

export function DetailContainer(): React.ReactElement {
  const dispatch = useDispatch();
  const params = useParams<Params>();
  const movie = useSelector<RootState, MovieState>(selectMovie);

  useEffect(() => {
    dispatch(fetchMovieRequest(params.slug));
  }, [dispatch, params.slug]);

  return <Detail movie={movie} />;
}

import React from "react";
import { Link } from "react-router-dom";
import { MovieState } from "../../@types/wookie-movies";

interface Props {
  movie: MovieState;
}

export function Movie({ movie }: Props): React.ReactElement<Props> {
  return (
    <div className="card m-1">
      <Link to={`/detail/${movie.slug}`}>
        <img className="card-img-top" src={movie.backdrop} alt={movie.title} />
      </Link>
    </div>
  );
}

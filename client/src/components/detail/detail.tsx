import React from "react";
import { MovieState } from "../../@types/wookie-movies";

import { Rating } from "./rating";

interface Props {
  movie: MovieState;
}

export function Detail({ movie }: Props): React.ReactElement<Props> {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="card-img img-thumbnail"
            src={movie.backdrop}
            alt={movie.title}
          />
        </div>

        <div className="col-md-6">
          <div className="card border-0 bg-light">
            <div className="card-body p-1">
              <h1 className="card-title">{movie.title}</h1>
              <p className="card-text">
                <Rating rating={movie.imdb_rating} />
              </p>
              <p className="card-text text-muted">
                <b>Year:</b> {new Date(movie.released_on).getFullYear()} |
                <b> Duration: </b>
                {movie.length}
                <br />
                <b>Director: </b>
                {Array.isArray(movie.director)
                  ? movie.director.join(", ")
                  : movie.director}
                <br />
                <b>Cast: </b>
                {movie.cast.join(", ")}
              </p>
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

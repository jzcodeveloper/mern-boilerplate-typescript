import React from "react";
import { MoviesByGenre, MovieState } from "../../@types/wookie-movies";

import { Movie } from "./movie";

interface Props {
  movies: MoviesByGenre[];
}

export function Movies({ movies }: Props): React.ReactElement<Props> {
  return (
    <div className="container-fluid my-3">
      {movies.map((movie: MoviesByGenre) => (
        <React.Fragment key={movie.genre}>
          <div className="row">
            <div className="col ">
              <h1 className="display-1">{movie.genre}</h1>
            </div>
          </div>

          <div className="row no-gutters">
            {movie.movies.map((movie: MovieState) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={movie.title}>
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

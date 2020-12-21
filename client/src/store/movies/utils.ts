import { MovieState, MoviesByGenre } from "../../@types/wookie-movies";

export const getGenres = (movies: MovieState[]): string[] => {
  return Array.from(
    new Set(movies.reduce((acc, val) => acc.concat(val.genres), [] as string[]))
  );
};

export const getMoviesByGenre = (movies: MovieState[]): MoviesByGenre[] => {
  const genres = getGenres(movies);
  return genres.map((genre: string) => ({
    genre,
    movies: movies.filter((movie: MovieState) => movie.genres.includes(genre)),
  }));
};

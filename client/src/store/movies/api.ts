import { MovieState, MoviesState } from "../../@types/wookie-movies";
import { AxiosRequestConfig } from "axios";

import { BaseApi } from "../../utils/api";
import { AXIOS_CONFIG } from "../../utils/constants";

class MoviesApi extends BaseApi {
  public constructor(config: AxiosRequestConfig) {
    super(config);

    this.fetchMovies = this.fetchMovies.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
  }

  public async fetchMovies(): Promise<MovieState[]> {
    try {
      const res = await this.get<MoviesState>(`/movies`);
      return res.data.movies;
    } catch (error) {
      throw error;
    }
  }

  public async searchMovies(query: string = ""): Promise<MovieState[]> {
    try {
      const res = await this.get<MoviesState>(`/movies?q=${query}`);
      return res.data.movies;
    } catch (error) {
      throw error;
    }
  }
}

export const moviesApi = new MoviesApi(AXIOS_CONFIG);

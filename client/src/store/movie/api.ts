import { MovieState } from "../../@types/wookie-movies";
import { AxiosRequestConfig } from "axios";

import { BaseApi } from "../../utils/api";
import { AXIOS_CONFIG } from "../../utils/constants";

class MovieApi extends BaseApi {
  public constructor(config: AxiosRequestConfig) {
    super(config);

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  public async fetchMovie(slug: string = ""): Promise<MovieState> {
    try {
      const res = await this.get<MovieState>(`/movies/${slug}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export const movieApi = new MovieApi(AXIOS_CONFIG);

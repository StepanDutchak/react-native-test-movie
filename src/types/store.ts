export interface IEpisode {
  id: number;
  episode: number;
  url: string;
}

export interface IMovie {
  id: string;
  genre: string[];
  title: string;
  year: number;
  author: string;
  episodeUrls: IEpisode[];
  dateRelease: string;
}

export interface ICategories {
  id: string;
  name: string;
  movies: IMovie[];
}

export interface IMoviesData {
  categories: ICategories[];
}

export interface RootState {
  movie: IMoviesData;
}

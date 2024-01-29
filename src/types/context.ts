import {IMovie} from './store';

export type AppStateProviderProp = {
  lastMovieInfo: {
    id: string;
    title: string;
    author: string;
  };
  isMovieStartWatching: boolean;
  setMovieStartWatching: () => void;
  saveCurrentEpisode: (episodeNumber: number, episodeData: IMovie) => void;
};

import React, {useCallback, useEffect, useState} from 'react';

import {AppStateContext} from './AppStateContext';
import storage from 'store/localStore/storage';
import {StorageKeys} from 'types/AsyncStorageEnums';
import {IMovie} from '@types';

interface AppState {
  children: React.ReactNode;
}

export const AppStateProvider = ({children}: AppState) => {
  const [isMovieStartWatching, setMovieStartWatching] = useState(false);
  const [lastMovieInfo, setLastMovieInfo] = useState({});

  const initApp = useCallback(async () => {
    const getLastEpisodeNumber = await storage.getItem(
      StorageKeys.lastEpisodeNumber,
    );
    const getLastEpisodeData = await storage.getItem(
      StorageKeys.movieLocalData,
    );
    if (getLastEpisodeData && getLastEpisodeNumber) {
      const formateLocalStoreRes = JSON.parse(getLastEpisodeData);
      setMovieStartWatching(Boolean(getLastEpisodeNumber));
      setLastMovieInfo({
        id: formateLocalStoreRes.id,
        title: formateLocalStoreRes.title,
        author: formateLocalStoreRes.author,
      });
    }
  }, []);

  useEffect(() => {
    initApp();
  }, [initApp]);

  const saveCurrentEpisode = useCallback(
    async (episode: number, episodeData: IMovie) => {
      await storage.setItem(StorageKeys.lastEpisodeNumber, episode);

      await storage.setItem(
        StorageKeys.movieLocalData,
        JSON.stringify(episodeData),
      );
      setLastMovieInfo({
        id: episodeData.id,
        title: episodeData.title,
        author: episodeData.author,
      });

      setMovieStartWatching(true);
    },
    [],
  );

  const context = {
    lastMovieInfo,
    saveCurrentEpisode,
    isMovieStartWatching,
    setMovieStartWatching,
  };

  return (
    <AppStateContext.Provider value={context}>
      {children}
    </AppStateContext.Provider>
  );
};

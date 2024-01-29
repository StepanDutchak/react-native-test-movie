import {useContext} from 'react';
import {AppStateContext} from './AppStateContext';

export const AppStateProvider = () => {
  return useContext(AppStateContext);
};

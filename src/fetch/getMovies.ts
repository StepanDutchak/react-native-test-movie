import {allDataFetch} from 'constants/fetch/fetchConfig';
import remoteConfig from '@react-native-firebase/remote-config';

export const fetchMovieData = async () => {
  await remoteConfig().fetchAndActivate();
  const fetchData = remoteConfig().getValue(allDataFetch);
  const result = JSON.parse(fetchData.asString());

  return result;
};

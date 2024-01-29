import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenNavigationEnums} from '../constants/enums/navigation';
import {IMovie} from './store';

export type PlayerScreenRouteParams = {
  episodeData: IMovie;
  currentEpisode: string;
};

export type ScreenRouteProp = {
  navigate: (SCREEN: string, items?: object) => void;
  goBack: () => void;
};

export type RootStackParamList = {
  [ScreenNavigationEnums.LOADING_SCREEN]: undefined;
  [ScreenNavigationEnums.HOME_SCREEN]: undefined;
  [ScreenNavigationEnums.PLAYER_SCREEN]: PlayerScreenRouteParams;
};

export type LoadingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNavigationEnums.LOADING_SCREEN
>;

export type PlayerScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNavigationEnums.PLAYER_SCREEN
>;

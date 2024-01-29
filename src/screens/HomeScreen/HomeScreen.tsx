import React, {useCallback} from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';

import {selectMovieData} from '../../store/selectors/moviesSelector';

import {text} from '../../locale/en';

import GiftImage from '../../assets/images/HeaderGift.png';

import {CategoryBlock, ScreenWrapper, MainBanner} from '@components';

import ContinueWatchBlock from 'components/ui/ContinueWatchBlock/ContinueWatchBlock';
import storage from 'store/localStore/storage';

import {StorageKeys} from 'types/AsyncStorageEnums';

import {ScreenNavigationEnums} from 'constants/enums/navigation';
import {AppStateProvider} from 'context/AppState';

import {PlayerScreenNavigationProp} from 'types/navigation';
import {AppStateProviderProp} from 'types/context';
import {ICategories} from '@types';

import {styles} from './styles';

interface IHomeScreen {
  navigation: PlayerScreenNavigationProp;
}

const HomeScreen = ({navigation}: IHomeScreen) => {
  const movies = useSelector(selectMovieData);

  const {isMovieStartWatching, lastMovieInfo}: Partial<AppStateProviderProp> =
    AppStateProvider();

  const handleContinueWatching = useCallback(async () => {
    const resLastEpisodeNumber = await storage.getItem(
      StorageKeys.lastEpisodeNumber,
    );
    const resMovieLocalData = await storage.getItem(StorageKeys.movieLocalData);

    navigation.navigate(ScreenNavigationEnums.PLAYER_SCREEN, {
      episodeData: JSON.parse(resMovieLocalData),
      currentEpisode: resLastEpisodeNumber,
    });
  }, [navigation]);

  const renderAdditionalIcon = useCallback(() => {
    return (
      <Image
        resizeMode="center"
        source={GiftImage}
        style={styles.additionalHeaderIcon}
      />
    );
  }, []);

  const renderCategoryBlock = useCallback((item: ICategories) => {
    return (
      <CategoryBlock
        key={item.id}
        contentData={item}
        containerStyle={styles.categoryBlock}
      />
    );
  }, []);

  const renderContinueWatchBlock = useCallback(() => {
    if (lastMovieInfo) {
      return (
        <ContinueWatchBlock
          handleContinue={handleContinueWatching}
          imageId={lastMovieInfo.id}
          title={lastMovieInfo.title}
          subtitle={lastMovieInfo.author}
          containerStyle={styles.continueWatchBlock}
        />
      );
    }
  }, [handleContinueWatching, lastMovieInfo]);

  return (
    <ScreenWrapper
      isScrollable
      headerTitle={text.homepage_header}
      additionalHeaderIcon={renderAdditionalIcon}>
      <MainBanner containerStyle={styles.mainBannerContainer} />
      {isMovieStartWatching && renderContinueWatchBlock()}
      {movies.map(renderCategoryBlock)}
    </ScreenWrapper>
  );
};

export default HomeScreen;

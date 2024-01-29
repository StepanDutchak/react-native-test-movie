import React, {useCallback, useMemo} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CategoryBlockCard from './ui/CategoryBlockCard/CategoryBlockCard';
import {GetWindowDimensions} from '../../../utils/dimensions';
import {ScreenNavigationEnums} from '../../../constants/enums/navigation';

import {CarouselList} from 'components';
import {ICategories, IMovie, ScreenRouteProp} from '@types';

import {styles} from './styles';

interface ICategoryBlock {
  containerStyle: object;
  contentData: ICategories;
}

const CategoryBlock = ({containerStyle, contentData}: ICategoryBlock) => {
  const navigation = useNavigation<ScreenRouteProp>();
  const sortedMovies = useMemo(() => {
    return contentData.movies.slice().sort((a, b) => {
      return (
        new Date(a.dateRelease).getTime() - new Date(b.dateRelease).getTime()
      );
    });
  }, [contentData.movies]);

  const handleCardPress = useCallback(
    (episode: IMovie) => {
      navigation.navigate(ScreenNavigationEnums.PLAYER_SCREEN, {
        episodeData: episode,
      });
    },
    [navigation],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.headerTitle}>{contentData.name}</Text>
      <CarouselList
        sliderWidth={GetWindowDimensions().width}
        itemWidth={140}
        containerStyle={styles.carouselListStyle}
        listData={sortedMovies}
        renderContent={({item}: {item: IMovie}) => (
          <CategoryBlockCard
            onPress={() => handleCardPress(item)}
            contentData={item}
          />
        )}
      />
    </View>
  );
};

export default React.memo(CategoryBlock);

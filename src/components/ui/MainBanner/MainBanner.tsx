import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {selectMoviesByCategory} from '../../../store/selectors/moviesSelector';
import ContentCard from './ui/ContentCard/ContentCard';

import {GetWindowDimensions} from '../../../utils/dimensions';

import {CarouselList} from 'components';

import {IMovie} from '@types';

import {styles} from './styles';

interface IItemCard {
  item: IMovie;
}
interface IMainBanner {
  containerStyle: object;
}

const MainBanner = ({containerStyle}: IMainBanner) => {
  const movieByData = useSelector(selectMoviesByCategory('all'));

  return (
    <View style={[styles.container, containerStyle]}>
      <CarouselList
        sliderWidth={GetWindowDimensions().width}
        itemWidth={GetWindowDimensions().width - 30}
        listData={movieByData}
        renderContent={({item}: IItemCard) => (
          <ContentCard contentData={item} />
        )}
      />
    </View>
  );
};

export default React.memo(MainBanner);

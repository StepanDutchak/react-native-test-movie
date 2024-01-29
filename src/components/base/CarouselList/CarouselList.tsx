import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {styles} from './styles';
import {IMovie} from '@types';

const defaultSlideAlignment = 'start';

type IActiveSlideAlignment = 'center' | 'end' | 'start';

interface ICarouselList {
  listData: IMovie[];
  renderContent: (props: {item: IMovie}) => JSX.Element;
  containerStyle?: object;
  sliderWidth: number;
  itemWidth: number;
  activeSlideAlignment?: IActiveSlideAlignment;
}

const CarouselList = ({
  listData,
  renderContent,
  containerStyle,
  sliderWidth,
  itemWidth,
  activeSlideAlignment,
}: ICarouselList) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Carousel
        data={listData}
        renderItem={renderContent}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        activeSlideAlignment={activeSlideAlignment ?? defaultSlideAlignment}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default React.memo(CarouselList);

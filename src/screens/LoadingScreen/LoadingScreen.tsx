import React, {useCallback, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useDispatch} from 'react-redux';

import {ScreenNavigationEnums} from '../../constants/enums/navigation';

import {ScreenWrapper} from '@components';
import {LoadingScreenNavigationProp} from '@types';

import {StartIconXml} from '@icons';

import {setMovie} from 'store/slices/movieSlice';
import {fetchMovieData} from '@fetch';

import {styles} from './styles';

type ILoadingScreen = {
  navigation: LoadingScreenNavigationProp;
};

const LoadingScreen: React.FC<ILoadingScreen> = ({navigation}) => {
  const dispatch = useDispatch();

  const [opacity] = useState(new Animated.Value(1));

  const preFetchData = useCallback(async () => {
    try {
      const movieData = await fetchMovieData();
      dispatch(setMovie(movieData));
      navigation.navigate(ScreenNavigationEnums.HOME_SCREEN);
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, navigation]);

  useEffect(() => {
    setTimeout(() => {
      preFetchData();
    }, 3000);
  }, [preFetchData]);

  return (
    <ScreenWrapper
      containerStyle={styles.container}
      isHeader={false}
      isScrollable>
      <Animated.View style={{opacity}}>
        <SvgXml height={200} width={200} xml={StartIconXml} />
      </Animated.View>
    </ScreenWrapper>
  );
};

export default LoadingScreen;

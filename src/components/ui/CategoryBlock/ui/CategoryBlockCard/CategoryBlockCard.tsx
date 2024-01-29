import React, {useMemo} from 'react';
import {ImageBackground, Text} from 'react-native';

import {MoviesImageConfig} from '../../../../../config/images';

import {formatDateForMovieRelease} from '../../../../../utils/dateFormater';

import {text} from '../../../../../locale/en';

import {AnimatedPress, LockBlurBlock} from 'components';
import {IMovie} from '@types';

import {styles} from './styles';

interface ICategoryBlockCard {
  contentData: IMovie;
  onPress: () => void;
}

const CategoryBlockCard = ({contentData, onPress}: ICategoryBlockCard) => {
  const isMovieNotRelease = useMemo(() => {
    const currentDate = new Date();
    const dateRelease = new Date(contentData.dateRelease);
    return dateRelease > currentDate;
  }, [contentData.dateRelease]);

  const renderLockBlurBlock = () => {
    return isMovieNotRelease && <LockBlurBlock />;
  };

  const dateReleaseTitle = () => {
    return `${text.coming_date_release.toUpperCase()} ${formatDateForMovieRelease(
      contentData.dateRelease,
    ).toUpperCase()}`;
  };

  const renderDateReleaseBlock = () => {
    return (
      isMovieNotRelease && (
        <Text style={styles.dateReleaseTitle}>{dateReleaseTitle()}</Text>
      )
    );
  };

  return (
    <AnimatedPress
      disabled={isMovieNotRelease}
      onPress={onPress}
      style={styles.content}>
      <ImageBackground
        blurRadius={isMovieNotRelease ? 10 : 0}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageStyle}
        source={MoviesImageConfig[contentData.id]}>
        {renderLockBlurBlock()}
      </ImageBackground>
      {renderDateReleaseBlock()}
      <Text
        style={[
          styles.title,
          isMovieNotRelease && styles.movieNotReleaseTitle,
        ]}>
        {contentData.title}
      </Text>
    </AnimatedPress>
  );
};

export default React.memo(CategoryBlockCard);

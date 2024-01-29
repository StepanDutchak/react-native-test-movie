import React from 'react';
import {ImageBackground, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {MainBannerImageConfig} from '../../../../../config/images';

import themes from 'theme/colors';

import {IMovie} from '@types';

import {styles} from './styles';

interface IContentCard {
  contentData: IMovie;
}

const ContentCard = ({contentData}: IContentCard) => {
  return (
    <ImageBackground
      source={MainBannerImageConfig[contentData.id]}
      resizeMode="cover"
      imageStyle={styles.bgImage}
      style={styles.container}>
      <LinearGradient
        colors={themes.dark.gradient.mainBanner}
        style={styles.content}>
        <Text style={styles.title}>{contentData.title}</Text>
        <Text style={styles.subtitle}>{contentData.author}</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default React.memo(ContentCard);

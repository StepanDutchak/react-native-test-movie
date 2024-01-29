import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {text} from 'locale/en';
import {RightArrow} from '@icons';
import AnimatedPress from 'components/base/AnimatedPress';
import {MoviesImageConfig} from 'config/images';

interface IContinueWatchBlock {
  containerStyle: object;
  title: string;
  subtitle: string;
  handleContinue: () => void;
  imageId: string;
}
const ContinueWatchBlock = ({
  containerStyle,
  title,
  subtitle,
  handleContinue,
  imageId,
}: IContinueWatchBlock) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.headerText}>{text.homepage_ContinueBlock}</Text>
      <AnimatedPress onPress={handleContinue} style={styles.container}>
        <View style={styles.raw}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={MoviesImageConfig[imageId]}
          />
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subTitle}>{subtitle}</Text>
          </View>
        </View>
        <RightArrow />
      </AnimatedPress>
    </View>
  );
};

export default React.memo(ContinueWatchBlock);

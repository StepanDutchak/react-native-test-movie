import {AnimatedPress} from '@components';
import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import themes from 'theme/colors';
import {CloseIcon} from '@icons';

import {styles} from './styles';

interface IHeader {
  leftHandler: () => void;
  episodeNumber: string;
}
const Header = ({leftHandler, episodeNumber}: IHeader) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={themes.dark.gradient.playerTopMenu}
      style={styles.container}>
      <View style={[styles.content, {marginTop: insets.top}]}>
        <AnimatedPress
          onPress={leftHandler}
          containerStyle={styles.controlContainer}>
          <CloseIcon />
        </AnimatedPress>
        <View style={styles.episodeContainer}>
          <Text style={styles.episodeTitle}>{`Episode ${episodeNumber}`}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default React.memo(Header);

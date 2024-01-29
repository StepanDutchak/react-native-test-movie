import {AnimatedPress} from '@components';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';

import themes from 'theme/colors';
import {PauseIcon, StartPlayIcon} from '@icons';

import {styles} from './styles';

interface IBottom {
  isPlaying: boolean;
  controlPlayPress: () => void;
}

const Bottom = ({controlPlayPress, isPlaying}: IBottom) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={themes.dark.gradient.playerBottomMenu}
      style={styles.container}>
      <View style={[styles.content, {marginBottom: insets.bottom}]}>
        <AnimatedPress
          onPress={controlPlayPress}
          containerStyle={styles.controlContainer}>
          {isPlaying ? <StartPlayIcon /> : <PauseIcon />}
        </AnimatedPress>
      </View>
    </LinearGradient>
  );
};

export default React.memo(Bottom);

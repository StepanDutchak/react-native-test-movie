import {StyleSheet} from 'react-native';
import themes from 'theme/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  lockContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
  blur: {
    borderRadius: 24,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: themes.dark.blur.lockMovie,
  },
});

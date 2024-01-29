import {StyleSheet} from 'react-native';
import {fonts} from 'theme/fonts';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 90,
    paddingHorizontal: 24,
  },
  controlContainer: {
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
  },
  content: {
    flex: 1,
  },
  episodeContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  episodeTitle: {
    ...fonts.h2Title,
  },
});
